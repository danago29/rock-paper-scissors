const actions = ["rock", "paper", "scissors"];
const outcomes = [[2, 1, 0], [0, 2, 1], [1, 0, 2]];

/* 
outcome = outcomes[computerAction][playerAction]
0 = computer wins
1 = player wins
2 = draw
*/ 

function playRound () {
    
    let computerAction = actions[Math.floor(Math.random()*actions.length)];
    let playerAction = prompt("Input action").toLowerCase();

    // get player action
    while (!actions.includes(playerAction)) {
        playerAction = prompt("Invalid input, please try again").toLowerCase();
    }

    return [computerAction, playerAction, outcomes[actionToIndex(computerAction)][actionToIndex(playerAction)]];
 
}


function actionToIndex (action) {
    if (actions.includes(action)) {
        switch (action) {
            case "rock":
                i = 0;
                break;
            case "paper":
                i = 1;
                break;
            case "scissors":
                i = 2;
                break;
        }
        return i;
    } else {
        return null;
    }
}

function outcomeToWinner (outcome) {
    if (outcome == 1 || outcome == 2 || outcome == 0) {
        switch (outcome) {
            case 0:
                i = "Computer wins!";
                break;
            case 1:
                i = "You win!";
                break;
            case 2:
                i = "It's a draw!"
                break;
        }
        return i;
    } else {
        return null;
    }
}


let runningScore = [0,0];
for (let i = 0; i < 3; i++) {
    res = playRound();
    switch (res[2]) {
        case 0:
            runningScore[0]++;
            break;
        case 1:
            runningScore[1]++;
            break;
        case 2:
            break;
    }
    console.log(`Round ${i+1}: Computer played ${res[0]}, you played ${res[1]}. ${outcomeToWinner(res[2])}`);
}

let overallWinner

if (runningScore[0] > runningScore[1]) {
    overallWinner = "Computer";
} else if (runningScore[0] < runningScore[1]) {
    overallWinner = "You";
} else {
    overallWinner = "It's a draw"
}

console.log(`And the overall winner is...${overallWinner}!`);