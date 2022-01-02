// variáveis 


function mostraCampo(){
  // linhas do campo
  rect(5, 4.5, 590, 1)
  rect(5, 394.5, 590, 1)
  rect(5, 4.5, 1, 390)
  rect(595, 4.5, 1, 390)
  rect(299, 4.5, 1, 390) 
  
  // circulo central
  circle(300, 200, 8)
  noFill()
  ellipse(300, 200, 100)
  
  // bordas
  arc(6, 6, 50, 50, 0, HALF_PI);
  arc(596, 6, 50, 50, PI/2, PI );  
  arc(6, 396, 50, 50, 3*PI/2, 0);
  arc(596, 396, 50, 50, PI, 3*PI/2);
  
  // area de gol
  
  // area maior esquerda
  rect(6, 115, 80, 1)
  rect(87, 115, 1, 176)
  rect(6, 290, 80, 1)
  // area menor esquerda
  rect(6, 150, 40, 1)
  rect(47, 150, 1, 110)
  rect(6, 259, 40, 1)
  
  circle(60, 205, 3)
  
  arc(90, 205, 40, 75, 3*PI/2, PI/2);
  
  // area maior direita
  rect(514, 115, 80, 1)
  rect(512, 115, 1, 176)
  rect(514, 290, 80, 1)
  // area menor direita
  rect(550, 150, 70, 1)
  rect(550, 150, 1, 110)
  rect(550, 260, 70, 1)
  
  circle(540, 205, 3)
  
  arc(510, 205, 40, 75, PI/2, 3*PI/2);
  

  

  
  
}