var database;
var position;
var gameState;

var form;

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  console.log(database);
  game = new Game();
  game.getState();
  game.start();

  form = new Form();
}

function draw() {
  background("white");

  form.display();

  drawSprites();
}
