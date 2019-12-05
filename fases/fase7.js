numAleatorioDois=Math.floor(Math.random() * 10)
 while( numAleatorioDois>11){
    numAleatorioDois=Math.floor(Math.random() * 10)
 }

 function fase7(){

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
   

   
   
   
   textStyle(BOLDITALIC);
   textSize(130);
   
   
   //textos
   textSize(75);
   textFont('Georgia')
   fill('black');
   if (respAleatorio[2]==1){
   text(numAleatorioDois, 150, 340);//resposta1
   text(numAleatorioDois+3, 560, 330);//resposta2
   text(numAleatorioDois+2, 170, 465);//resposta3
   text(numAleatorioDois+1,570,465);    //resposta4
    }
    if (respAleatorio[2]==2){
        text(numAleatorioDois+3, 150, 340);//resposta1
        text(numAleatorioDois, 560, 330);//resposta2
        text(numAleatorioDois+2, 170, 465);//resposta3
        text(numAleatorioDois+1,570,465);    //resposta4
         }
         if (respAleatorio[2]==3){
            text(numAleatorioDois+3, 150, 340);//resposta1
            text(numAleatorioDois+2, 560, 330);//resposta2
            text(numAleatorioDois, 170, 465);//resposta3
            text(numAleatorioDois+1,570,465);    //resposta4
             }
             if (respAleatorio[2]==4){
                text(numAleatorioDois+1, 150, 340);//resposta1
                text(numAleatorioDois+3, 560, 330);//resposta2
                text(numAleatorioDois+2, 170, 465);//resposta3
                text(numAleatorioDois,570,465);    //resposta4
                 }

   //@
   textSize(15);
   fill('black');
   text('@julianoaureliano',300,570)
 
   textSize(95);
   
   text('5 x ?= '+(5*numAleatorioDois),185,130)
   
   //caixa vermelha
   noFill();
   stroke('#CB4154');
   strokeWeight(5);
   
   //coordenadas
   textFont('Arial')
   fill('black')
   
   
   
   //se a resposta aleatoria for igual a 1
if(respAleatorio[2]==1){
   if(resposta['resposta1']){
       mouseIsPressed=false
       winSound.play();
       alert('5 x '+numAleatorioDois+' = '+(numAleatorioDois*5))
       alert('acertou!!')
       telaAtiva=11
       

       

   }
   if(resposta['resposta2']){
    mouseIsPressed=false
    loseSound.play();
    alert('5 x '+(numAleatorioDois+3)+' = '+((numAleatorioDois+3)*5))
    alert('Você ERROU!!')
    alert('A resposta certa é : '+'5 x '+numAleatorioDois+' = '+(numAleatorioDois*5))
    window.location.reload()       
    

   
   }
   if(resposta['resposta3']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('5 x '+(numAleatorioDois+2)+' = '+((numAleatorioDois+2)*5))
        alert('A resposta certa é : '+'5 x '+numAleatorioDois+' = '+(numAleatorioDois*5))        
        window.location.reload()  
   }
   if(resposta['resposta4']){
    mouseIsPressed=false
    loseSound.play();
    alert('Você ERROU!!')
    alert('5 x '+(numAleatorioDois+1)+' = '+((numAleatorioDois+1)*5))
    alert('A resposta certa é : '+'5 x '+numAleatorioDois+' = '+(numAleatorioDois*5))       
    window.location.reload()  
       
   }
}
//se a resposta aleatoria for igual a 2
if(respAleatorio[2]==2){
    if(resposta['resposta1']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('5 x '+(numAleatorioDois+3)+' = '+((numAleatorioDois+3)*5))
        alert('A resposta certa é : '+'5 x '+numAleatorioDois+' = '+(numAleatorioDois*5))           
        window.location.reload()  
           
       }
 
        
 
    
    if(resposta['resposta2']){
     mouseIsPressed=false
     winSound.play();
     alert('5 x '+numAleatorioDois+' = '+(5*numAleatorioDois))
     alert('acertou!!')    
     telaAtiva=11    
    }
    if(resposta['resposta3']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('5 x '+(numAleatorioDois+2)+' = '+((numAleatorioDois+2)*5))
        alert('A resposta certa é : '+'5 x '+numAleatorioDois+' = '+(numAleatorioDois*5))           
        window.location.reload()  
    }
    if(resposta['resposta4']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('5 x '+(numAleatorioDois+1)+' = '+((numAleatorioDois+1)*5))
        alert('A resposta certa é : '+'5 x '+numAleatorioDois+' = '+(numAleatorioDois*5))           
        window.location.reload()  
        
    }
}
//se a resposta aleatoria for igual a 3
if(respAleatorio[2]==3){
    if(resposta['resposta1']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('5 x '+(numAleatorioDois+3)+' = '+((numAleatorioDois+3)*5))
        alert('A resposta certa é : '+'5 x '+numAleatorioDois+' = '+(numAleatorioDois*5))           
        window.location.reload()  
           
       }
 
        
 
    
    if(resposta['resposta2']){    
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('5 x '+(numAleatorioDois+2)+' = '+((numAleatorioDois+2)*5))
        alert('A resposta certa é : '+'5 x '+numAleatorioDois+' = '+(numAleatorioDois*5))
        window.location.reload()  
    }
    if(resposta['resposta3']){       
     mouseIsPressed=false
     winSound.play();
     alert('5 x '+numAleatorioDois+' = '+(5*numAleatorioDois))
     alert('acertou!!')    
     telaAtiva=11
           
    }
    if(resposta['resposta4']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('5 x '+(numAleatorioDois+1)+' = '+((numAleatorioDois+1)*5))
        alert('A resposta certa é : '+'5 x '+numAleatorioDois+' = '+(numAleatorioDois*5))           
        window.location.reload()  
        
    }
}
//se a resposta aleatoria for igual a 4
if(respAleatorio[2]==4){
    if(resposta['resposta1']){
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('5 x '+(numAleatorioDois+1)+' = '+((numAleatorioDois+1)*5))
        alert('A resposta certa é : '+'5 x '+numAleatorioDois+' = '+(numAleatorioDois*5))           
        window.location.reload()  
           
       }

    if(resposta['resposta2']){     
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('5 x '+(numAleatorioDois+3)+' = '+((numAleatorioDois+3)*5))
        alert('A resposta certa é : '+'5 x '+numAleatorioDois+' = '+(numAleatorioDois*5))
        window.location.reload()  
    }
    if(resposta['resposta3']){ 
        mouseIsPressed=false
        loseSound.play();
        alert('Você ERROU!!')
        alert('5 x '+(numAleatorioDois+2)+' = '+((numAleatorioDois+2)*5))
        alert('A resposta certa é : '+'5 x '+numAleatorioDois+' = '+(numAleatorioDois*5))
        window.location.reload()  
      
    }
    if(resposta['resposta4']){
        mouseIsPressed=false
        winSound.play();
        alert('5 x '+numAleatorioDois+' = '+(5*numAleatorioDois))
        alert('acertou!!')
    
    telaAtiva=11
       
        
    }
}
   
}