class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play()
  {
    form.hidden();
    textSize(30);
    text("Game Start",120,100);
    Player.getPlayerInfo();
    if(allPlayers!==undefined)
    {
      var myy=130;
     for(var plr in allPlayers)
     {
       myy=myy+20;
       if(plr==="player"+player.index)
       {
         fill("red");
       }
       else
       {
         fill("black");
       }
       textSize(20);
       text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,myy);
     } 
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
      player.distance+=50;
      player.update();
    }
  }
}
