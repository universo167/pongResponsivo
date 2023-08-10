// variáveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;
let velocidadex = 6;
let velocidadey = 6;

//variáveis minha raquete
let xRaquete = 5;
let yRaquete = 125;
let comprimentoRaq = 10;
let alturaRaq = 70;
let colide = false;
//variáveis Raquete Oponente
let xRaqueteOp = 585;
let yRaqueteOp = 125;
let velocidadeOponentey;
let meusPontos=0;
let pontosOponente=0;

function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaq ();
  colideRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOp,yRaqueteOp);
  movimentoRaqueteOponente();
  colideRaquete(xRaqueteOp,yRaqueteOp);
  placar();
  marcarPontos();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha() {
  xBolinha = xBolinha + velocidadex;
  yBolinha = yBolinha + velocidadey;
  if (xBolinha + raio > width || xBolinha - raio < 0)
    velocidadex = velocidadex * -1;

  if (yBolinha + raio > height || yBolinha - raio < 0)
    velocidadey = velocidadey * -1;
}
function mostraRaquete(x,y) {
  rect(x, y, comprimentoRaq, alturaRaq);
}
function movimentaMinhaRaq (){
  if(yRaquete>0||yRaquete<300){
    yRaquete = mouseY;
  }
   
 
  
};
function colideRaquete(x,y){  //if (xBolinha-raio< xRaquete+comprimentoRaq && yBolinha-raio< yRaquete+alturaRaq&& yBolinha+raio>yRaquete){velocidadex=velocidadex*-1}

  colide = collideRectCircle( x, y, comprimentoRaq,alturaRaq,xBolinha,yBolinha,raio);

  if (colide) {
    velocidadex = velocidadex * -1;
  }
}
function controiraqueteoponente(){
  rect(xRaqueteOp,yRaqueteOp,ComprimentoRaqOp,alturaRaqOp)
}
function movimentoRaqueteOponente(){
  velocidadeOponentey = yBolinha -yRaqueteOp -alturaRaq/2 +50
  yRaqueteOp = yRaqueteOp + velocidadeOponentey
}
function placar(){
  
  fill(255,255,255);
  textSize(30)
  text(meusPontos,100,30)
  text(pontosOponente,500,30)
   
}
function marcarPontos(){
  if (xBolinha>= 585){meusPontos = meusPontos+1}
  if (xBolinha<=15){
    pontosOponente=pontosOponente+1;
    xbolinha = 570;
    ybolinha = 200;
  }
  
}