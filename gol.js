//placar do jogo

let meusPontos = 0;
let pontosOponente = 0;

// variáveis gol

let xGol = 0;
let yGol = 150;
let golComprimento = 5;
let golAltura = 110;

// variáveis gol oponente

let xGolOponente = 595;
let yGolOponente = 150;
let golOponenteComprimento = 5;
let golOponenteAltura = 110;

function mostraGol(x, y){
  rect(xGol, yGol, golComprimento, golAltura);
}

function mostraGolOponente(x, y){
  rect(xGolOponente, yGolOponente, golOponenteComprimento, golOponenteAltura);
}

function marcaPonto(){
  if(xBolinha > 590 && yBolinha > 149 && yBolinha < 265){
    meusPontos += 1;
    ponto.play();
    xBolinha = 300;
    yBolinha = 200;
  }
   if(xBolinha < 10  && yBolinha > 149 && yBolinha < 265){
    pontosOponente += 1;
    ponto.play();
    xBolinha = 300;
    yBolinha = 200;
  }
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosOponente, 470, 26);
}
