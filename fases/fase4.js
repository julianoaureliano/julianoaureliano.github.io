function fase4(){
    
    

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
   image(img[4], 185, 65);
   
   //textos
   textSize(75);
   textFont('Georgia')
   fill('black');
   //Equaçao : 5 x ? = 40
   text('10', 150, 340);//resposta1
   text('40', 540, 340);//resposta2
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

   
   
   //ver a alternativa certa
   if(resposta['resposta1']){
       mouseIsPressed=false
       loseSound.play();
       alert('5 x 10 = 50')
       alert('Você ERROU!!')
       telaAtiva=5
   }
   if(resposta['resposta2']){
    mouseIsPressed=false
    loseSound.play();
    alert('5 x 40 = 200')
    alert('Você ERROU!!')
  
   telaAtiva=5
   
   }
   if(resposta['resposta3']){
    mouseIsPressed=false
    winSound.play();
        alert('5 x 8 = 40')
        alert('Parabéns')
       telaAtiva=8

        
   }
   if(resposta['resposta4']){
    mouseIsPressed=false
    loseSound.play();
    alert('5 x 7 = 35')
    alert('Você ERROU!!')
       
       telaAtiva=5
       
   }
   
   
}