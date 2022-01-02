let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;

function mostraBolinha(){
   fill(color(255,255,255))
   circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width ||
      xBolinha - raio  < 0) {
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height ||
      yBolinha - raio  < 0){
    velocidadeyBolinha *= -1;
  }  
}