////////////////////////////////////////////////////////////////////////////
// FASE 2

function fase2(){
    
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
   
   
   
   
   
   textStyle(BOLDITALIC);
   textSize(130);
   image(img[2], 200, 60);
   image(mold, 0, 0);
   //textos
   textSize(75);
   textFont('Georgia')
   fill('black');
   text('5', 165, 330);
   text('6', 560, 345);
   text('8', 160, 475);
   text('9',560,465)
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
       alert('1 x 5 = 5')
       alert('Você ERROU!!')
       telaAtiva=5
   }
   if(resposta['resposta2']){
    mouseIsPressed=false
    loseSound.play();
    alert('1 x 6 = 6')
    alert('Você ERROU!!')
   
   telaAtiva=5
   
   }
   if(resposta['resposta3']){
    mouseIsPressed=false
    winSound.play();
        alert('1 x 8 = 8')
        alert('Parabéns')
         
        telaAtiva=6

   }
   if(resposta['resposta4']){
    mouseIsPressed=false
    loseSound.play();
    alert('1 x 9 = 9')
    alert('Você ERROU!!')
       
       telaAtiva=5
   }
   
   
}