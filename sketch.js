var canvas , backgroundImage ;
var gameState = 0 ;
var playerCount ;
var database ;
var form ;
var player ;
var game ;
var allPlayers ;
var cars, car1, car2, car3, car4 ; 

function setup(){
  database = firebase.database();
  canvas = createCanvas(displayWidth-20,displayHeight);
  game = new Game();
game.getState();
game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

}



