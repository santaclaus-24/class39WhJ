var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var CAR1, CAR2, CAR3, CAR4, TRACK1, TRACK2;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  CAR1 = loadImage("images/car1.png")
  CAR2 = loadImage("images/car2.png")
  CAR3 = loadImage("images/car3.png")
  CAR4 = loadImage("images/car4.png")

  TRACK1 = loadImage("images/track.jpg");
  TRACK2 = loadImage("images/track.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
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
 if (gameState === 2){
   game.end();
 }
}
