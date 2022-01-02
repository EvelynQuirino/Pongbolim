//variáveis da raquete

let xRaquete1 = 70;
let yRaquete1 = 175;
let raqueteComprimento = 10;
let raqueteAltura = 60;

let xRaquete2 = 400;
let yRaquete2 = 175;

//variáveis do oponente

let xRaqueteOponente1 = 190;
let yRaqueteOponente1 = 175;

let xRaqueteOponente2 = 520;
let yRaqueteOponente2 = 175;

let velocidadeYOponente;

function mostraRaquete(x, y){
  fill(color(0,255,0))
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function mostraRaqueteOponente(x, y){
  fill(color(255, 0, 0))
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete1 -= 10;
  }
  if (keyIsDown(UP_ARROW)){
    yRaquete2 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete1 += 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete2 += 10;
  }
}

function movimentaRaqueteOponente(){
  if (keyIsDown(87)){
    yRaqueteOponente1 -= 10;
  }
  if (keyIsDown(87)){
    yRaqueteOponente2 -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente1 += 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente2 += 10;
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, diametro);
    if (colidiu){
        velocidadexBolinha *= -1;
        raquetada.play();
    }
}