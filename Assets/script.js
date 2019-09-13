var choice;
var AIchoice = ["rock", "paper", "scissors", "lizard", "spock"];
var AIsign;
var win = 0;
var loss = 0;
var wincounter = document.getElementById("win");
var losscounter = document.getElementById("loss");


(function () {

    function randomGenerateInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.getElementById("rock").addEventListener("click", function () {
        choice = "rock";
        AIsign = AIchoice[randomGenerateInt(0, 4)];
        console.log(choice);
        console.log(AIsign);

        if (AIsign === "paper") {
            alert("you lose!");
            loss++;
            console.log(loss)
        }

        if (AIsign === "scissors") {
            alert(" you win!");
            win++;
            console.log(win);
        }

        if (choice === AIsign) {
            alert("It's a tie!")
        }

        if (AIsign === "lizard") {
            alert("you win");
            win++;
            console.log(win)
        }

        if (AIsign === "spock") {
            alert("you lose");
            loss++;
            console.log(loss);
        }

    });

    document.getElementById("paper").addEventListener("click", function () {
        choice = "paper";
        AIsign = AIchoice[randomGenerateInt(0, 4)];
        console.log(choice);
        console.log(AIsign);

        if (AIsign === "rock") {
            alert("you win!");
            win++
        }

        if (AIsign === "scissors") {
            alert("you lose!");
            loss++
        }

        if (AIsign === "paper") {
            alert("It's a tie!")
        }

        if (AIsign === "lizard") {
            alert("you lose")
        }

        if (AIsign === "spock") {
            alert("you win");
            win++
        }
    });

    document.getElementById("scissors").addEventListener("click", function () {
        choice = "scissors";
        AIsign = AIchoice[randomGenerateInt(0, 4)];
        console.log(choice);
        console.log(AIsign);


        if (AIsign === "rock") {
            alert("you lose!");
            loss++
        }

        if (AIsign === "paper") {
            alert("you win!");
            win++
        }
        if (choice === AIsign) {
            alert("It's a tie!")
        }

        if (AIsign === "lizard") {
            alert("you win");
            win++
        }

        if (AIsign === "spock") {
            alert("you lose");
            loss++
        }
    });

    document.getElementById("lizard").addEventListener("click", function () {
        choice = "lizard";
        AIsign = AIchoice[randomGenerateInt(0, 4)];
        console.log(choice);
        console.log(AIsign);

        if (AIsign === "rock") {
            alert("you lose!");
            loss++
        }

        if (AIsign === "paper") {
            alert("you win!");
            win++
        }
        if (choice === "scissors") {
            alert("you lose");
            loss++
        }

        if (AIsign === choice) {
            alert("it's a tie")
        }

        if (AIsign === "spock") {
            alert("you win");
            win++
        }

    });

    document.getElementById("spock").addEventListener("click", function () {
        choice = "spock";
        AIsign = AIchoice[randomGenerateInt(0, 4)];
        console.log(choice);
        console.log(AIsign);

        if (AIsign === "rock") {
            alert("you win");
            win++
        }

        if (AIsign === "paper") {
            alert("you lose!");
            loss++
        }
        if (choice === "scissors") {
            alert("you win!");
            win++
        }

        if (AIsign === "lizard") {
            alert("you lose");
            loss++
        }

        if (AIsign === choice) {
            alert("it's a tie")
        }

    });

    wincounter = win;
    losscounter= loss;


})();