function jogo(){
    
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
    
    image(img, 200, 60);
    //textos
    textSize(75);
    textFont('Georgia')
    fill('black');
    text('1', 170, 340);
    text('2', 560, 340);
    text('3', 170, 465);
    text('4',560,465)
    //@
    textSize(15);
    fill('black');
    text('@julianoaureliano',300,570)
  
  
    //caixa vermelha
    noFill();
    stroke('#CB4154');
    strokeWeight(5);
    rect(posicaoCaixax, posicaoCaixay, 310, 110);
    //coordenadas
    textFont('Arial')
    fill('black')
    text('mauseX: '+mouseX,50,20)
    text('mauseY: '+mouseY,50,40)
    
    console.log(mouseIsPressed)
    //ver a alternativa certa
    if(resposta['resposta1']){
        
        winSound.play();
        alert('Parabens!!! INDO PARA SEGUNDA FASE...')
        mouseIsPressed=false
        telaAtiva=4


    }
    if(resposta['resposta2']){
        loseSound.play();
    alert('Clickei no 2')
    mouseIsPressed=false
    
    
    
    }
    if(resposta['resposta3']){
        loseSound.play();
        alert('Clickei no 3')   
        mouseIsPressed=false
    }
    if(resposta['resposta4']){
        loseSound.play();
        alert('Clickei no 4')
        mouseIsPressed=false
    }
    
    
}




