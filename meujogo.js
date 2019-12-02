
var x = 225;
var y =175;
//1 - jogar
//2 - regras
//3 - sair
var opcao = 1 
var telaAtiva = 1;
let img=[];
let mold;

function preload() {
  soundFormats('mp3', 'ogg');
  for(i=1;i<=7;i++){
    img[i] = loadImage('png/equacao'+i+'.png');
  }
  mold= loadImage('png/moldura.png')
  mySound = loadSound('music/kahoot.mp3');
  winSound = loadSound('music/win.mp3');
  loseSound = loadSound('music/lose.mp3')
  regraImage=loadImage('png/regras.png')
  
}


function setup() {
  createCanvas(800, 600);
  mySound.play();
 	mySound.setLoop(true);
  
 	
}

function draw() {
  
  
  switch(telaAtiva) {
    
    case 1: 
    fase8();
     /* menu();
      if (keyCode === ENTER) 
        jogo();*/
      break;
    case 2:
      regras();
      break;  
    case 3:
      sair();
      break;
    case 4:
      fase2();
      break;
    case 5:
      perdeu();
      break;
    case 6:
      fase3();
      break; 
    case 7:
      fase4();
      break;
    case 8:
      fase5();
      break;
    case 9:
        fase6();
      break;
    case 10:
        fase7();
      break;
    case 11:
        fase8();
      break;                
  }
}



function keyPressed() {
  console.log(keyCode);
  //logica das telas
  if(telaAtiva==2 || telaAtiva==3 || telaAtiva ==5 && keyCode==27 )
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


