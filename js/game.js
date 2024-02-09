playerName = [localStorage.getItem("name1"), localStorage.getItem("name2")];

nowPlayerName = document.querySelector("#now-player");
nowPlayerName.textContent = playerName[0];

checkboxButton = document.querySelectorAll(".checkbox");
titleElement = document.querySelector("h1 p");

let count = 0;
let gameBoard = [[0,0,0],[0,0,0],[0,0,0]]
let isGameOver = false;

function gameRule (y, x) {
    let winner = 0;
    if (gameBoard[y][0] === gameBoard[y][1] && gameBoard[y][1] === gameBoard[y][2]) {
        winner = gameBoard[y][x];
    } else if (gameBoard[0][x] === gameBoard[1][x] && gameBoard[1][x] === gameBoard[2][x]) {
        winner = gameBoard[y][x];
    } else if ((gameBoard[0][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][2])) {
        winner = gameBoard[1][1];
    } else if ((gameBoard[2][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[0][2])) {
        winner = gameBoard[1][1];
    }


    if (winner !== 0) {
        titleElement.textContent = "You're win!";
        nowPlayerName.textContent = winner === 1 ? playerName[0] : playerName[1];
        isGameOver = true;
    } 
}

function checkButton (event, y, x) {
    if (isGameOver) return;
    if (event.target.classList.contains("clicked")) return;
    let symbol;
    if (count % 2 == 0) {
        symbol = "O";
        gameBoard[y][x] = 1;
        nowPlayerName.textContent = playerName[1];
    }
    else {
        symbol = "X";
        gameBoard[y][x] = 2;
        nowPlayerName.textContent = playerName[0];
    }
    count++;
    event.target.textContent = symbol;
    event.target.classList.add("clicked");
    gameRule(y,x);
    if (count === 9 && !isGameOver) {
        titleElement.textContent = "Draw Game. Click ";
        nowPlayerName.textContent = "Start New Game";
        isGameOver = true;
    }
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let num = i*3 + j;
        checkboxButton[num].addEventListener("click", (event) => checkButton(event,i,j));
    }
}