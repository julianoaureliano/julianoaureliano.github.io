function fase5(){
    
    
    
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
   image(img[5], 185, 65);
   
   //textos
   textSize(75);
   textFont('Georgia')
   fill('black');
   
   text('5', 150, 340);//resposta1
   text('6', 540, 340);//resposta2
   text('8', 160, 475);//resposta3
   text('7',560,465);//resposta
   //@
   textSize(15);
   fill('black');
   text('@julianoaureliano',300,570)
 
 
   //caixa vermelha

   //coordenadas
   textFont('Arial')
   fill('black')
   text('mauseX: '+mouseX,50,20)
   text('mauseY: '+mouseY,50,40)
   
   //Equaçao : 6 x ? = 36
   //ver a alternativa certa
   if(resposta['resposta1']){
       mouseIsPressed=false
       loseSound.play();
       alert('6 x 5 = 30')
       alert('Você ERROU!!')
       telaAtiva=5
   }
   if(resposta['resposta2']){
    mouseIsPressed=false
    winSound.play();
    alert('6 x 6 = 36')
    alert('Parabéns')
  
  
   
   }
   if(resposta['resposta3']){
    mouseIsPressed=false
    loseSound.play();
        alert('6 x 8 = 48')
        alert('Você ERROU!!')  
        telaAtiva=5      
    }
   
    if(resposta['resposta4']){
    mouseIsPressed=false
    loseSound.play();
    alert('6 x 7 = 42')
    alert('Você ERROU!!')
       
       telaAtiva=5
       
   }
   
   
}