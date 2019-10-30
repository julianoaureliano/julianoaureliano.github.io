
var x = 225;
var y =175;
//1 - jogar
//2 - regras
//3 - sair
var opcao = 1 
var telaAtiva = 1;
let img;
function preload() {
  soundFormats('mp3', 'ogg')
  mySound = loadSound('music/kahoot.mp3');
  img = loadImage('png/equacao1.png');

}


function setup() {
  createCanvas(800, 600);
  mySound.play();
 	
}

function draw() {
  
  
  switch(telaAtiva) {
    case 1:
      menu();
      if (keyCode === ENTER) 
        jogo();
      break;
    case 2:
      regras();
      break;  
    case 3:
      sair();
      break;
      
  }
 
}


function keyPressed() {
  console.log(keyCode);
  //logica das telas
  if(telaAtiva==2 || telaAtiva==3)
      telaAtiva=1;
  
  if (keyCode === ENTER) 
      telaAtiva=opcao;
      //teclas
  if (keyCode === DOWN_ARROW) {
    if(y<300){
       y+=110;
       if(opcao==1)
       opcao=2;
        else 
          if(opcao==2)
          opcao=3; 
    }

  } else if (keyCode === UP_ARROW) {
	    if(y>250) {
      y-=110;
        if(opcao==2) {
          opcao=1;
      } else { 
          if(opcao==3) {
          opcao=2;
          }
       }     
	    }
    }
}


