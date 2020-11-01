class Form {
    constructor(){
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting = createElement('h3');
        this.reset = createButton('RESET');
        this.title = createElement('h1');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 - 20,30);
        
        this.input.position(displayWidth/2,displayHeight/2 - 50);
        this.button.position(displayWidth/2 + 50,displayHeight/2);
        this.reset.position(20,20);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();

            playerCount += 1;
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("HELLO " + player.name);
            this.greeting.position(displayWidth/2 - 20,displayHeight/2);
        })
        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
        })
        
    }
}