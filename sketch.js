//sons do jogo

let raquetada;
let ponto;
let trilha;

//chances de errar

let chanceDeErrar = 0;

let colidiu = false;

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(2, 95, 21);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  mostraRaquete(xRaquete1, yRaquete1);
  mostraRaquete(xRaquete2, yRaquete2);
  mostraRaqueteOponente(xRaqueteOponente1, yRaqueteOponente1);
  mostraRaqueteOponente(xRaqueteOponente2, yRaqueteOponente2);
  verificaColisaoRaquete(xRaquete2, yRaquete2);
  verificaColisaoRaquete(xRaquete1, yRaquete1);
  verificaColisaoRaquete(xRaqueteOponente1, yRaqueteOponente1);
  verificaColisaoRaquete(xRaqueteOponente2, yRaqueteOponente2);
  incluiPlacar();
  marcaPonto();
  mostraGol();
  mostraGolOponente();
  mostraCampo();
}




