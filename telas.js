function menu() {
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
    image(mold, 0, 0);
    text('Juroot',170, 145)
    
    //textos
    textSize(75);
    textFont('Georgia')
    fill('black');
    text('Jogar', 265, 250);
    text('Regras', 240, 360);
    text('Sair', 295, 475);
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
//===========================================
//tela regras
  function regras() {
    //R, G, B
    
   background('#7FDBFF');
    
   fill('white');
   stroke('black');
   strokeWeight(1);
   
   textSize(28);
   fill('black');
   
   text('Aqui vao as regras', 40, 55);
 }

//===========================================
//tela sair
function sair() {
   //R, G, B
  background('#7FDBFF');
   
  fill('white');
  stroke('black');
  strokeWeight(1);
  
  textSize(28);
  fill('black');
  
  text('saindo', 40, 55);
  
}
//===========================================
//tela sair
function perdeu() {
  //R, G, B
 background('#7FDBFF');
 
 fill('white');
 stroke('black');
 strokeWeight(1);
 
 textSize(100);
 fill('black');
 image(mold, 0, 0);
 text('Você Perdeu', 100, 100);
 textSize(50);
 text('Aperte "Esc" para SAIR!! ', 80, 230);
 textSize(40);
 text('Aperte "ENTER" para CONTINUAR!! ', 30, 400);

 
 
}







