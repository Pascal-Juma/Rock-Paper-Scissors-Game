const gameDisplay = document.querySelector(".game-display");
computerChoice = document.querySelector(".computerChoice"),
humanChoice = document.querySelector(".humanChoice"),
result = document.querySelector(".result"),
choices = document.querySelectorAll("#choices button");
gameResultComputer = document.querySelector("#computerScore");
gameResultPlayer = document.querySelector("#playerScore");
let computerScore = 0;
let playerScore = 0;

choices.forEach((choice, index) => {
    choice.addEventListener("click", (e) => {
        choice.classList.add("active");

        choices.forEach((choice2, index2) => {
            index !== index2 && choice2.classList.remove("active");
        });
        // Link player choice and player display
        let emoji = e.currentTarget.querySelector(".emojis").textContent;
        humanChoice.textContent = emoji;

        // generate a random number btn 0 & 2
        let randomNumber = Math.floor(Math.random() * 3);
        console.log(randomNumber);

        // Create an array of computer choices
        let computerChoices = ["✊", "✋", "✌️"];
        // Link computer choice and computer display
        computerChoice.textContent = computerChoices[randomNumber];

        // Assign a letter value to the computer choice( R for rock, P for paper, S for scissors)
        let computerValue = ["R", "P", "S"][randomNumber];

        // Assign a letter value to the player choice( R for rock, P for paper, S for scissors)
        let humanValue = ["R", "P", "S"][index];

        // Create an object with all possible outcomes
        let outcomes ={
            RR: "Draw",
            RP: "Computer",
            RS: "Player",
            PR: "Computer",
            PP: "Draw",
            PS: "Player",
            SR: "Computer",
            SP: "Player",
            SS: "Draw"
        };

        // Look up the outcome value based on user and computer choice
        let outComeValue = outcomes[humanValue + computerValue];

        // Display the result
        result.textContent = humanValue === computerValue ? " Draw" : `${outComeValue} wins`;

        // Update scores based on the outcome
        if (outComeValue === "Player") {
            playerScore++;
        } else if (outComeValue === "Computer") {
            computerScore++;
        }

        // Update the score display in the HTML
        gameResultComputer.textContent = computerScore;
        gameResultPlayer.textContent = playerScore;
    });
});