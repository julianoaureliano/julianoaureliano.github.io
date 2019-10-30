function jogo(){
     //R, G, B
     background('#00A4A6');
     //solidos
    fill('#FBF1F2');
    stroke('black');
    strokeWeight(1);
    rect(230, 180, 300, 100, 10);
    rect(230, 290, 300, 100, 10);
    rect(230, 400, 300, 100, 10);
    
    
    textStyle(BOLDITALIC);
    textSize(130);
    
    fill('#CB4154')
    textFont('Bebas')
    text('Juroot',170, 145)
    //textos
    textSize(75);
    textFont('Georgia')
    fill('black');
    text('Jogar', 265, 250);
    text('Regras', 240, 360);
    text('Voltar', 295, 475);
    //@
    textSize(15);
    fill('black');
    text('@julianoaureliano',300,570)
  
  
    //caixa vermelha
    noFill();
    stroke('#CB4154');
    strokeWeight(5);
    rect(x, y, 310, 110);
   
    
}
