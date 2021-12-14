class Game{
constructor(){

}
getState(){
    var gameState_ref = database.ref('gameState');
    gameState_ref.on("value",function(data){
    gameState = data.val();
    }
    )
}
update(state){
    database.ref('/').update({
        gameState : state
    })
}
async start(){
    if(gameState === 0 ){
        player = new Player();
        playerCount_ref = await database.ref('palyerCount').once("value");
        if(playerCount_ref.exists()){
            playerCount = playerCount_ref.val();
            player.getCount();
        }
        else{
            playerCount = 0 ;
        }
        form = new Form();
        form.display(playerCount);
    }
    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
    cars = [car1, car2, car3, car4];
}
play(){
    form.hide();
    //textSize(15);
    //text("game start",120,100);
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
        var index = 0;
        var x = 100;
        var y ;
        for(var plr in allPlayers){
            index = index + 1 ;
            x = x + 200 ; 
            y = displatHight - allPlayers[plr].distance ;
            cars[index - 1].x = x ;
            cars[index - 1].y = y ;
            if(index === player.index){
                fill("red");
                ellipse(x,y,60,60);
                cars[index - 1].shapeCollor("red");
                camera.position.x = displayWidht/2;
                camera.position.y = cars[idnex - 1].y;
                
            }
        }
        if(keyDown("up")){
            player.distance = player.distande + 10;
            player.update();
            
        }
        }
}

}