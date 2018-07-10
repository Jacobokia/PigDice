//business logic
var Player1 = ""; //create a variable player1
var Player2 = "" //create a variable  player2

var rollDice = function(){
  return Math.floor(Math.random()* 6) + 1;
}

//use a constructor : equate roll, currentScore, and totalScore to zero since dice numbers are generated randomly
function Player(roll,currentScore,totalScore,turn, playerName) {
  this.roll = 0;
  this.currentScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.playerName = playerName;
}

var Player1 = Math.floor(Math.random () * 6) + 1;
var Player2 = Math.floor(Math.random() * 6) + 1;



//UI logic
