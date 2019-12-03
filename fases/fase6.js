numAleatorioUm=Math.floor(Math.random() * 10)
 while( numAleatorioUm>5){
    numAleatorioUm=Math.floor(Math.random() * 10)
 }
var respAleatorio=[]
for(i=1;i<7;i++) {
    respAleatorio[i]= numaAleatorio();
}
 function numaAleatorio(){
aleatorio =Math.floor(Math.random() * 10)

while( aleatorio<1||aleatorio>4){
        aleatorio=Math.floor(Math.random() * 10)
    }
return aleatorio;
 }
 

function fase6(){

    let resposta ={
        resposta1:mouseIsPressed && mouseX>40 && mouseX<338 && mouseY>271 && mouseY<367,
        resposta2:mouseIsPressed && mouseX>440 && mouseX<738 && mouseY>271 && mouseY<367,
        resposta3:mouseIsPressed && mouseX>40 && mouseX<338 && mouseY>401 && mouseY<496,
        resposta4:mouseIsPressed && mouseX>440 && mouseX<738 && mouseY>401 && mouseY<496
                    }

   //R, G, B
    background('#00A4A6');
    //solidos
   fill('#FBF1F2');
   stroke('black');
   strokeWeight(1);
   //fundo da Imagem
   rect(170, 40, 450, 150, 20);
   //1
   rect(40, 270, 300, 100, 10);
   //2
   rect(40, 400, 300, 100, 10);
   //3
   rect(440, 270, 300, 100, 10);
   //4                
   rect(440, 400, 300, 100, 10);
   image(mold, 0, 0);
   

   text(respAleatorio[1],100,200)
   
   
   textStyle(BOLDITALIC);
   textSize(130);
   
   
   //textos
   textSize(75);
   textFont('Georgia')
   fill('black');
   if (respAleatorio[1]==1){
   text(numAleatorioUm, 150, 340);//resposta1
   text(numAleatorioUm+3, 560, 330);//resposta2
   text(numAleatorioUm+2, 170, 465);//resposta3
   text(numAleatorioUm+1,570,465);    //resposta4
    }
    if (respAleatorio[1]==2){
        text(numAleatorioUm+3, 150, 340);//resposta1
        text(numAleatorioUm, 560, 330);//resposta2
        text(numAleatorioUm+2, 170, 465);//resposta3
        text(numAleatorioUm+1,570,465);    //resposta4
         }
         if (respAleatorio[1]==3){
            text(numAleatorioUm+3, 150, 340);//resposta1
            text(numAleatorioUm+2, 560, 330);//resposta2
            text(numAleatorioUm, 170, 465);//resposta3
            text(numAleatorioUm+1,570,465);    //resposta4
             }
             if (respAleatorio[1]==4){
                text(numAleatorioUm+1, 150, 340);//resposta1
                text(numAleatorioUm+3, 560, 330);//resposta2
                text(numAleatorioUm+2, 170, 465);//resposta3
                text(numAleatorioUm,570,465);    //resposta4
                 }

   //@
   textSize(15);
   fill('black');
   text('@julianoaureliano',300,570)   
 
   textSize(95);
   text(numAleatorioUm,100,100)
   text('3 x ?= '+(3*numAleatorioUm),200,130)
   
   //caixa vermelha
   noFill();
   stroke('#CB4154');
   strokeWeight(5);
   
   //coordenadas
   textFont('Arial')
   fill('black')

   
   
   //se a resposta aleatoria for igual a 1
if(respAleatorio[1]==1){
   if(resposta['resposta1']){
       mouseIsPressed=false
       winSound.play();
       alert('3 x '+numAleatorioUm+' = '+(numAleatorioUm*3))
       alert('acertou!!')
       telaAtiva=10
       

       

   }
   if(resposta['resposta2']){
    mouseIsPressed=false
    loseSound.play();
    alert('3 x '+(numAleatorioUm+3)+' = '+((numAleatorioUm+3)*3))
    alert('Você ERROU!!')
    alert('A resposta certa é : '+'3 x '+numAleatorioUm+' = '+(numAleatorioUm*3))       
    window.location.reload()  
   
   }
   if(resposta['resposta3']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('3 x '+(numAleatorioUm+2)+' = '+((numAleatorioUm+2)*3))
        alert('A resposta certa é : '+'3 x '+numAleatorioUm+' = '+(numAleatorioUm*3))        
        window.location.reload()  
   }
   if(resposta['resposta4']){
    mouseIsPressed=false
    loseSound.play();
    alert('Você ERROU!!')
    alert('3 x '+(numAleatorioUm+1)+' = '+((numAleatorioUm+1)*3))
    alert('A resposta certa é : '+'3 x '+numAleatorioUm+' = '+(numAleatorioUm*3))       
    window.location.reload()  
       
   }
}
//se a resposta aleatoria for igual a 2
if(respAleatorio[1]==2){
    if(resposta['resposta1']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('3 x '+(numAleatorioUm+3)+' = '+((numAleatorioUm+3)*3))
        alert('A resposta certa é : '+'3 x '+numAleatorioUm+' = '+(numAleatorioUm*3))           
        window.location.reload()  
           
       }
 
        
 
    
    if(resposta['resposta2']){
     mouseIsPressed=false
     winSound.play();
     alert('3 x '+numAleatorioUm+' = '+(3*numAleatorioUm))
     alert('acertou!!')    
     telaAtiva=10    
    }
    if(resposta['resposta3']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('3 x '+(numAleatorioUm+2)+' = '+((numAleatorioUm+2)*3))
        alert('A resposta certa é : '+'3 x '+numAleatorioUm+' = '+(numAleatorioUm*3))           
        window.location.reload()  
    }
    if(resposta['resposta4']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('3 x '+(numAleatorioUm+1)+' = '+((numAleatorioUm+1)*3))
        alert('A resposta certa é : '+'3 x '+numAleatorioUm+' = '+(numAleatorioUm*3))           
        window.location.reload()  
        
    }
}
//se a resposta aleatoria for igual a 3
if(respAleatorio[1]==3){
    if(resposta['resposta1']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('3 x '+(numAleatorioUm+3)+' = '+((numAleatorioUm+3)*3))
        alert('A resposta certa é : '+'3 x '+numAleatorioUm+' = '+(numAleatorioUm*3))           
        window.location.reload()  
           
       }
 
        
 
    
    if(resposta['resposta2']){    
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('3 x '+(numAleatorioUm+2)+' = '+((numAleatorioUm+2)*3))
        alert('A resposta certa é : '+'3 x '+numAleatorioUm+' = '+(numAleatorioUm*3))
        telaAtiva = 5
    }
    if(resposta['resposta3']){       
     mouseIsPressed=false
     winSound.play();
     alert('3 x '+numAleatorioUm+' = '+(3*numAleatorioUm))
     alert('acertou!!')    
     telaAtiva=10
           
    }
    if(resposta['resposta4']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('3 x '+(numAleatorioUm+1)+' = '+((numAleatorioUm+1)*3))
        alert('A resposta certa é : '+'3 x '+numAleatorioUm+' = '+(numAleatorioUm*3))           
        window.location.reload()  
        
    }
}
//se a resposta aleatoria for igual a 4
if(respAleatorio[1]==4){
    if(resposta['resposta1']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('3 x '+(numAleatorioUm+1)+' = '+((numAleatorioUm+1)*3))
        alert('A resposta certa é : '+'3 x '+numAleatorioUm+' = '+(numAleatorioUm*3))           
        window.location.reload()  
           
       }

    if(resposta['resposta2']){     
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('3 x '+(numAleatorioUm+3)+' = '+((numAleatorioUm+3)*3))
        alert('A resposta certa é : '+'3 x '+numAleatorioUm+' = '+(numAleatorioUm*3))
        window.location.reload()  
    }
    if(resposta['resposta3']){ 
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('3 x '+(numAleatorioUm+2)+' = '+((numAleatorioUm+2)*3))
        alert('A resposta certa é : '+'3 x '+numAleatorioUm+' = '+(numAleatorioUm*3))
        window.location.reload()  
      
    }
    if(resposta['resposta4']){
        mouseIsPressed=false
        winSound.play();
        alert('3 x '+numAleatorioUm+' = '+(3*numAleatorioUm))
        alert('acertou!!')
    
    telaAtiva=10
       
        
    }
}
   
}