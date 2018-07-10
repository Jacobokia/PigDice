//business logic
var player1  //create a variable player1
var player2  //create a variable  player2

var rollDice = function(){
  return Math.floor(Math.random()* 6) + 1;
}

//use a constructor : equate roll, currentScore, and totalScore to zero since dice numbers are generated randomly
function Player(name) {
  this.roll = 0;
  this.currentScore = 0;
  this.totalScore = 0;
  this.playerName = name;
}


//creating  a prototype for checking a roll for a new object(rollCheck)
Player.prototype.rollCheck = function() {
  this.roll = rollDice()
  if (this.roll === 1){
    this.currentScore = 0;
    alert("sorry" + this.playerName + "" + "You lose your points")
  }
  else {
    this.currentScore = this.roll;
  }
  return this.currentScore;
};

//checking for hold the Dice
Player.prototype.holdCheck = function(){
  this.totalScore += this.currentScore;
  //this.currentScore = 0;
  return this.totalScore;
}

//checking for the winner
Player.prototype.winnerCheck = function(){
  if (this.totalscore >= 100){
    alert(this.playerName + "" + "You are the winner")
  }
}

//setting new game to  start 0
Player.prototype.newGame = function(name){
  this.roll = 0;
  this.currentScore = 0;
  this.totalScore = 0;
  this.playerName = name;
}

var newValues = function(){
  $(".player-1-name").val("");
  $(".player-2-name").val("");

}

//UI logic
$(document).ready(function(){
   $("#start").click(function(event){
    event.preventDefault();
    var player1Name = $(".player1Name").val();
    player1 = new Player(player1Name);
    console.log(player1);
    player2 = new Player(false);

    $("#game-selector").show();
    $("#body").hide();

    var player1Name = $(".player1Name").val();


    var player2Name = $(".player-2-name").val();
    $("#player-2-name").text(player2Name);

    player1.playerName=player1Name;
    player2.playerName=player2Name;


  });
    $("#new-game").click(function(event){
    $("#game-selector").hide();
    newValues();

    $("#diceroll").empty();
    $("#roundtotal").empty();
    $("#totalscore").empty();

    $("#diceroll").empty();
    $("#roundtotal").empty();
    $("#totalscore").empty();

    $("#game-selector").show();

 });
    $("button#player1roll").click(function(){
      player1.roll = rollDice();
    $("#diceroll").text(player1.roll);
    $("#round-total").text(player1.rollCheck());
  });

    $("button#player1hold").click(function(event){
    $(".total-score").text(player1.holdCheck());
    $("#round-total").empty();
      player1.winnerCheck();
  });
    $("button#player2roll").click(function(){
      player2.roll = rollDice();
    $("#diceroll").text(player2.roll);
    $("#round-total2").text(player2.rollCheck());

  });
    $("button#player2hold").click(function(event){
    $(".total-score2").text(player2.holdCheck());
    $("#round-total2").empty();
      player2.winnerCheck();
    })







});
