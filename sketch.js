var position,database;
var gameState = 0;
var form,game,player;
var playerCount = 0;
var Distance = 0;
var allPlayers;
var car1,car2,car3,car4;
var car1Img,car2Img,car3Img,car4Img,track;
var cars;
var CarsAtEnd = 0;

function preload()
{
    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    track = loadImage("images/track.jpg");

}

function setup(){
    createCanvas(displayWidth - 30, displayHeight - 30);
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
    else if(gameState === 2){
        //game.update(2);
        game.End();
    }
    if(gameState === 0){
        form.display();
    }
}
