numAleatorioThree=Math.floor(Math.random() * 10)
 while( numAleatorioThree>11){
    numAleatorioThree=Math.floor(Math.random() * 10)
 }

 function fase8(){

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
   

   text(respAleatorio[3],100,200)
   
   
   textStyle(BOLDITALIC);
   textSize(130);
   
   
   //textos
   textSize(75);
   textFont('Georgia')
   fill('black');
   if (respAleatorio[3]==1){
   text(numAleatorioThree, 150, 340);//resposta1
   text(numAleatorioThree+3, 560, 330);//resposta2
   text(numAleatorioThree+2, 170, 465);//resposta3
   text(numAleatorioThree+1,570,465);    //resposta4
    }
    if (respAleatorio[3]==2){
        text(numAleatorioThree+3, 150, 340);//resposta1
        text(numAleatorioThree, 560, 330);//resposta2
        text(numAleatorioThree+2, 170, 465);//resposta3
        text(numAleatorioThree+1,570,465);    //resposta4
         }
         if (respAleatorio[3]==3){
            text(numAleatorioThree+3, 150, 340);//resposta1
            text(numAleatorioThree+2, 560, 330);//resposta2
            text(numAleatorioThree, 170, 465);//resposta3
            text(numAleatorioThree+1,570,465);    //resposta4
             }
             if (respAleatorio[3]==4){
                text(numAleatorioThree+1, 150, 340);//resposta1
                text(numAleatorioThree+3, 560, 330);//resposta2
                text(numAleatorioThree+2, 170, 465);//resposta3
                text(numAleatorioThree,570,465);    //resposta4
                 }

   //@
   textSize(95);
   fill('black');
   
 
  
   text(numAleatorioThree,100,100)
   text('8 x ?= '+(8*numAleatorioThree),185,130)
   textSize(30);
   //caixa vermelha
   noFill();
   stroke('#CB4154');
   strokeWeight(5);
   
   //coordenadas
   textFont('Arial')
   fill('black')
   text('mauseX: '+mouseX,50,20)
   text('mauseY: '+mouseY,50,40)
   
   
   //se a resposta aleatoria for igual a 1
if(respAleatorio[3]==1){
   if(resposta['resposta1']){
       mouseIsPressed=false
       winSound.play();
       alert('8 x '+numAleatorioThree+' = '+(numAleatorioThree*8))
       alert('acertou!!')
       telaAtiva=5
       

       

   }
   if(resposta['resposta2']){
    mouseIsPressed=false
    loseSound.play();
    alert('8 x '+(numAleatorioThree+3)+' = '+((numAleatorioThree+3)*8))
    alert('Você ERROU!!')
    alert('A resposta certa é : '+'8 x '+numAleatorioThree+' = '+(numAleatorioThree*8))
    window.location.reload()       
    telaAtiva=5

   
   }
   if(resposta['resposta3']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('8 x '+(numAleatorioThree+2)+' = '+((numAleatorioThree+2)*8))
        alert('A resposta certa é : '+'8 x '+numAleatorioThree+' = '+(numAleatorioThree*8))        
        telaAtiva=5
   }
   if(resposta['resposta4']){
    mouseIsPressed=false
    loseSound.play();
    alert('Você ERROU!!')
    alert('8 x '+(numAleatorioThree+1)+' = '+((numAleatorioThree+1)*8))
    alert('A resposta certa é : '+'8 x '+numAleatorioThree+' = '+(numAleatorioThree*8))       
    telaAtiva=5
       
   }
}
//se a resposta aleatoria for igual a 2
if(respAleatorio[3]==2){
    if(resposta['resposta1']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('8 x '+(numAleatorioThree+3)+' = '+((numAleatorioThree+3)*8))
        alert('A resposta certa é : '+'8 x '+numAleatorioThree+' = '+(numAleatorioThree*8))           
        telaAtiva=5
           
       }
 
        
 
    
    if(resposta['resposta2']){
     mouseIsPressed=false
     winSound.play();
     alert('8 x '+numAleatorioThree+' = '+(8*numAleatorioThree))
     alert('acertou!!')    
     telaAtiva=7    
    }
    if(resposta['resposta3']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('8 x '+(numAleatorioThree+2)+' = '+((numAleatorioThree+2)*8))
        alert('A resposta certa é : '+'8 x '+numAleatorioThree+' = '+(numAleatorioThree*8))           
        telaAtiva=5
    }
    if(resposta['resposta4']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('8 x '+(numAleatorioThree+1)+' = '+((numAleatorioThree+1)*8))
        alert('A resposta certa é : '+'8 x '+numAleatorioThree+' = '+(numAleatorioThree*8))           
        telaAtiva=5
        
    }
}
//se a resposta aleatoria for igual a 3
if(respAleatorio[3]==3){
    if(resposta['resposta1']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('8 x '+(numAleatorioThree+3)+' = '+((numAleatorioThree+3)*8))
        alert('A resposta certa é : '+'8 x '+numAleatorioThree+' = '+(numAleatorioThree*8))           
        telaAtiva=5
           
       }
 
        
 
    
    if(resposta['resposta2']){    
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('8 x '+(numAleatorioThree+2)+' = '+((numAleatorioThree+2)*8))
        alert('A resposta certa é : '+'8 x '+numAleatorioThree+' = '+(numAleatorioThree*8))
        telaAtiva = 5
    }
    if(resposta['resposta3']){       
     mouseIsPressed=false
     winSound.play();
     alert('8 x '+numAleatorioThree+' = '+(8*numAleatorioThree))
     alert('acertou!!')    
     telaAtiva=7
           
    }
    if(resposta['resposta4']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('8 x '+(numAleatorioThree+1)+' = '+((numAleatorioThree+1)*8))
        alert('A resposta certa é : '+'8 x '+numAleatorioThree+' = '+(numAleatorioThree*8))           
        telaAtiva=5
        
    }
}
//se a resposta aleatoria for igual a 4
if(respAleatorio[3]==4){
    if(resposta['resposta1']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('8 x '+(numAleatorioThree+1)+' = '+((numAleatorioThree+1)*8))
        alert('A resposta certa é : '+'8 x '+numAleatorioThree+' = '+(numAleatorioThree*8))           
        telaAtiva=5
           
       }

    if(resposta['resposta2']){     
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('8 x '+(numAleatorioThree+3)+' = '+((numAleatorioThree+3)*8))
        alert('A resposta certa é : '+'8 x '+numAleatorioThree+' = '+(numAleatorioThree*8))
        telaAtiva=5
    }
    if(resposta['resposta3']){ 
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('8 x '+(numAleatorioThree+2)+' = '+((numAleatorioThree+2)*8))
        alert('A resposta certa é : '+'8 x '+numAleatorioThree+' = '+(numAleatorioThree*8))
        telaAtiva=5
      
    }
    if(resposta['resposta4']){
        mouseIsPressed=false
        winSound.play();
        alert('8 x '+numAleatorioThree+' = '+(8*numAleatorioThree))
        alert('acertou!!')
    
    telaAtiva=7
       
        
    }
}
   
}