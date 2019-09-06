var choice;
var AIchoice = ["rock", "paper", "scissors"];
var AIsign;

(function () {

    function randomGenerateInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.getElementById("rock").addEventListener("click", function () {
        choice = "rock";
        AIsign = AIchoice[randomGenerateInt(0, 2)];
        console.log(choice);
        console.log(AIsign);

        if (AIsign === "paper") {
            alert("you lose!")
        }

        if (AIsign === "scissors") {
            alert(" you win!")
        }

        if (choice === AIsign) {
            alert("It's a tie!")
        }

    });

    document.getElementById("paper").addEventListener("click", function () {
        choice = "paper";
        AIsign = AIchoice[randomGenerateInt(0, 2)];
        console.log(choice);
        console.log(AIsign);

        if (AIsign === "rock") {
            alert("you win!")
        }

        if (AIsign === "scissors") {
            alert("you lose!")
        }

        if (choice === AIsign) {
            alert("It's a tie!")
        }
    });

    document.getElementById("scissors").addEventListener("click", function () {
        choice = "scissors";
        AIsign = AIchoice[randomGenerateInt(0, 2)];
        console.log(choice);
        console.log(AIsign);


        if (AIsign === "rock") {
            alert("you lose!")
        }

        if (AIsign === "paper") {
            alert("you win!")
        }
        if (choice === AIsign) {
            alert("It's a tie!")
        }
    });

})();