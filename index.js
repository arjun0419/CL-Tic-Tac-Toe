var readlineSync = require('readline-sync');

var boardValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var winner = null;
var moves = null;
var player1Turn = true;

var printBoard = () => {
  console.log(`${boardValues[0]} | ${boardValues[1]} | ${boardValues[2]} `)
  console.log(`${boardValues[3]} | ${boardValues[4]} | ${boardValues[5]} `)
  console.log(`${boardValues[6]} | ${boardValues[7]} | ${boardValues[8]} `)
}

checkforWinner = () => {
  if (
    boardValues[0] + boardValues[1] + boardValues[2] === 'XXX' 
    || boardValues[3] + boardValues[4] + boardValues[5] === 'XXX'
    || boardValues[6] + boardValues[7] + boardValues[8] === 'XXX' 
    || boardValues[0] + boardValues[4] + boardValues[8] === 'XXX'
    || boardValues[2] + boardValues[4] + boardValues[6] === 'XXX'
    || boardValues[0] + boardValues[3] + boardValues[6] === 'XXX'
    || boardValues[1] + boardValues[4] + boardValues[7] === 'XXX'
    || boardValues[2] + boardValues[5] + boardValues[8] === 'XXX'
    ) {
    declareWinner(1);
  } else if (
    boardValues[0] + boardValues[1] + boardValues[2] === 'OOO' 
    || boardValues[3] + boardValues[4] + boardValues[5] === 'OOO'
    || boardValues[6] + boardValues[7] + boardValues[8] === 'OOO' 
    || boardValues[0] + boardValues[4] + boardValues[8] === 'OOO'
    || boardValues[2] + boardValues[4] + boardValues[6] === 'OOO'
    || boardValues[0] + boardValues[3] + boardValues[6] === 'OOO'
    || boardValues[1] + boardValues[4] + boardValues[7] === 'OOO'
    || boardValues[2] + boardValues[5] + boardValues[8] === 'OOO')  {
    declareWinner(2);
  }
};

let declareWinner = (player) => {
  console.log(`You won player ${player}! Congrats!`)
  console.log("********************************************************")
  console.log(`*****************PLAYER ${player} WON!!!!***************`)
  console.log("********************************************************")
}

let notLegal = (index) => {
  if (boardValues[index] === 'X' || boardValues[index] === 'O') {
    return true;
  } else {
    return false;
  }
};

let play = () => {
  while(!winner && moves < 10) {
    if (player1Turn) {
      console.log("Player 1 your move!");
      var play1 = readlineSync.question('Enter the cell number where you want to play (press enter when done):  ');
      if (notLegal(Number(play1 - 1))) {
        console.log("Sorry! That spot is not legal try again!");
      } else {
        boardValues[Number(play1 - 1)] = "X";
        player1Turn = false;
        moves++
        printBoard();
        checkforWinner();
      }
    } else {
      console.log("Player 2 your move!");
      var play2 = readlineSync.question('Enter the cell number where you want to play (press enter when done):  ');
      if (notLegal(Number(play2 - 1))) {
        console.log("Sorry! That spot is not legal try again!");
      } else {
        boardValues[Number(play2 - 1)] = "O";
        player1Turn = true;
        moves++;
        printBoard();
        checkforWinner();
      }
    }
  }
}
console.log("let's play Tic Tac Toe!!!!!")
console.log("When prompted, enter the cell number where you want to mark")
printBoard();
play();


