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
  this.playerName = "";
}


//creating  a prototype for checking a roll for a new object(rollCheck)
Player.prototype.rollCheck = function () {
  if (this.roll === 1){
    this.currentScore = 0;
    alert("sorry" + this.playerName + "" + "You lose your points")
  }
  else {
    this.currentScore += this.roll;
  }
};

//checking for hold the Dice
Player.prototype.holdCheck = function(){
  this.totalScore += currentScore;
  this.currentScore = 0;
  alert(this.playerName + "" + "sorry!your turn is over")
}

//checking for the winner
Player.prototype.winnerCheck = function(){
  if (this.totalscore >= 100){
    alert(this.playerName + "" + "You are the winner")
  }
}

//setting new game to  start 0
Player.prototype.newGame = function(){
  this.roll = 0;
  this.currentScore = 0;
  this.totalScore = 0;
  this.playerName = "";
}



//UI logic
