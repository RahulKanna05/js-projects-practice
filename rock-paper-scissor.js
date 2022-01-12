function computerPlay() {
    computerOptions = ["paper","rock","scissor"];
    computerChoice = Math.floor(Math.random()*computerOptions.length);
    return computerOptions[computerChoice];
}

function userPlay() {
//     const ps = require("prompt-sync");
//     const prompt = ps();
//     userChoice = prompt("What is your choice? ");
    var userChoice = prompt("What is your choice? ");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function playGame(userChoice,computerChoice) {
    if(userChoice == computerChoice) {
        console.log(`Woo Yours ${userChoice.toUpperCase()} and Computer's ${computerChoice.toUpperCase()} makes a tie.`);
    }
    else if((userChoice == "rock" && computerChoice=="scissor") || (userChoice == "scissor" && computerChoice == "paper") || (userChoice == "paper" && computerChoice == "rock")) {
        userPoints+=1;
        console.log(`Wohoho...Yours ${userChoice.toUpperCase()} makes a move over Computer's ${computerChoice.toUpperCase()}`);
    }
    else {
        computerPoints+=1;
        console.log(`Oops...Computer's ${computerChoice.toUpperCase()} makes a move over Yours ${userChoice.toUpperCase()}`);
    }
}

userPoints = computerPoints = 0
var userExhausted = "no";
for(let i=1;i<=2;i++)
{
    userChoice = userPlay();
    computerChoice = computerPlay();

    playGame(userChoice, computerChoice);
}

while(userExhausted.toLowerCase() != "yes") {
    userChoice = userPlay();
    computerChoice = computerPlay();

    playGame(userChoice, computerChoice);
    userExhausted = prompt("Exhausted?Then enter 'yes'");
}

console.log(`POINTS: 
You: ${userPoints}
Computer: ${computerPoints}`);

if(userPoints > computerPoints) {
    console.log("Congrats dude!!!. Win more and more")
}
else if (userPoints == computerPoints) {
    console.log("Thats a great competition.");
}
else {
    console.log("Sorry dude. Computer crashed you. Dont loose the spirit!");
}
