class Form{
    constructor(){
        this.input = createInput("Coloque seu nome");
        this.button = createButton('play');
        this.greeting = createElement('h3');
        this.title = createElement('h2');
    }
    display(palyerCount){
    this.title.html("Jogo De Carro Mult Jogador");
    this.title.position(displayWidth/2-50,0);
    this.input.position(displayWidth/2-40,displayHight/2-80);
    this.button.position(displayWidth/2+30,displayHight/2);
    this.button.mousePressed(function(){
        this.input.hide();
        this.button.hide();
        player.name =  this.input.value();
        playerCount += 1;
        palyer.index = palyerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Ola " + player.name);
        this.greeting.position(displayWidth/2-70,displayHight/4);
    });
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
       
    }
}