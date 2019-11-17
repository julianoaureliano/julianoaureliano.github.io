function fase3(){
    
    let posicaoCaixax = 35
    let posicaoCaixay = 265 
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
   image(img[3], 200, 60);
   
   //textos
   textSize(75);
   textFont('Georgia')
   fill('black');
   text('12', 150, 340);//resposta1
   text('4', 560, 330);//resposta2
   text('9', 170, 465);//resposta3
   text('7',570,465);//resposta
   //@
   textSize(15);
   fill('black');
   text('@julianoaureliano',300,570)
 
 
   //caixa vermelha
   noFill();
   stroke('#CB4154');
   strokeWeight(5);
   
   //coordenadas
   textFont('Arial')
   fill('black')
   text('mauseX: '+mouseX,50,20)
   text('mauseY: '+mouseY,50,40)
   
   
   //ver a alternativa certa
   if(resposta['resposta1']){
       mouseIsPressed=false
       loseSound.play();
       alert('3 x 12 = 36')
       alert('Você ERROU!!')
       telaAtiva=5
   }
   if(resposta['resposta2']){
    mouseIsPressed=false
    loseSound.play();
    alert('3 x 4 = 12')
    alert('Você ERROU!!')
   
   telaAtiva=5
   
   }
   if(resposta['resposta3']){
    mouseIsPressed=false
    loseSound.play();
        alert('3 x 9 = 27')
        alert('Você ERROU!!')
        
        telaAtiva=5
   }
   if(resposta['resposta4']){
    mouseIsPressed=false
    winSound.play();
    alert('3 x 7 = 21')
    alert('Parabéns')
       
       telaAtiva=7
       
   }
   
   
}