class Game {
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }
    update(state){
        database.ref('/').update({
            gameState : state

        });

    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200); 
        cars = [car1,car2,car3,car4];

        car1.addImage(car1Img);
        car2.addImage(car2Img);
        car3.addImage(car3Img);
        car4.addImage(car4Img);
        
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        if(allPlayers !== undefined){
            background(rgb(146,124,111));
            image(track, 0, -displayHeight * 4,displayWidth, displayHeight * 5);
            //console.log(player.distance);

            var index = 0;
            var x = 180;
            var y;
            
            for(var plr in allPlayers){
                index = index + 1;
                x = x + 220;
                y = displayHeight - allPlayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if(index === player.index){
                    cars[index - 1].shapeColor = "red";
                    fill("red");
                    strokeWeight(6);
                    circle(x,y,60);
                    
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y;
                }
            }

                
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }

        if(player.distance >= 4200){
            gameState = 2;
            player.rank += 1;
            Player.updateCarsAtEnd(player.rank);

        }
        console.log(gameState);
        
        drawSprites();
    }
    End(){
        //console.log("Game Ended");
        //console.log(player.rank);
    }
}