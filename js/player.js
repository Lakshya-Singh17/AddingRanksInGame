class Player {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;
    }
    getCount(){
        var PlayerCountRef = database.ref('playerCount');
        PlayerCountRef.on("value",function(data){
            playerCount = data.val();
        });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        });

    }
    static updateCarsAtEnd(rank){
        database.ref('/').update({
            CarsAtEnd : rank 

        })
    }
    getCarsAtEnd(){
        database.ref('CarsAtEnd').on("value",(data)=>{
            this.rank = data.val();
        })
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        });
    }
    static getPlayerInfo(){
        var PlayerInfoRef = database.ref('players');
        PlayerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }


}