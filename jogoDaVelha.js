//constantes globais
const LARGURA_GAME = 320;
const ALTURA_GAME = 320;
const LARGURA_TILE = 100;
const ALTURA_TILE = 100;
const LARGURA_DIVISORIA = 10;
const JOGADOR_UM = "X";
const JOGADOR_DOIS = "O";
//variaveis globais
var total_partidas = 1;
var vitoria_1 = 0 ;
var vitoria_2 = 0 ;
var limpador=0;
var canvas;
var ctx;
var ctx4;
var context;
var matrizJogo = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
var vezDoJogador = JOGADOR_UM;
// identificação do nome dos jogadores
function ADICIONARj1() {
    document.getElementById('nome').value = msg;
 }
 function ADICIONARj2() {
    document.getElementById('nome').value = msg;
 }
function setup () {
    console.log("Começa a Partida :)");
    console.log(" ''IMPORTANTE'' A cada partida  o console sera limpo para uma melhor vizualização");
    console.log("o jogador 1 sera o 'X' e o jogador 2 sera a 'O' ");
    
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    //captura o clique
    canvas.addEventListener("mousedown", capturaClique);
    
    setInterval(loop,1000/30);  

}

function loop() {
    desenha();
}

function desenha () {
    desenhaTelaDoJogo();
    desenhaJogadasNoGrid();
}

function adicionaJogadaNaMatriz (quadranteX, quadranteY) {

    let jogada = obtemJogada();
    
    if (!verificaFinalDoJogo()) {
        if (matrizJogo[quadranteX][quadranteY] === 0) {
            matrizJogo[quadranteX][quadranteY] = jogada;
        }
    } else {
        limpaJogo();
    }
    
}

function obtemJogada () {
    let jogada = vezDoJogador;

    if (vezDoJogador === JOGADOR_UM) {
        vezDoJogador = JOGADOR_DOIS;
    } else {
        vezDoJogador = JOGADOR_UM;
    }

    return jogada;
}

function verificaFinalDoJogo () {

    let acabou = true;

    // verifica se acabou com grid completo
    for (let x=0; x < matrizJogo.length; x++) {
        for (let y=0; y <  matrizJogo[x].length; y++) {
            if (matrizJogo[x][y] === 0) {
                acabou = false;
                break;
            }
        }
    }

    //linhas verticais
    for (let x=0; x < 3; x++) {
        if (matrizJogo[x][0] !== 0 && 
            matrizJogo[x][0] === matrizJogo[x][1] &&
            matrizJogo[x][0] === matrizJogo[x][2] ) {
                var c4Canvas = document.getElementById("c4");
                ctx4 = c4Canvas.getContext("2d");
                tempo = setTimeout(desenhaHorizontal(), 50)
                
                
                var ultimo = obtemJogada();
                if(ultimo== JOGADOR_UM){
                    vitoria_1++;
                }
                
                if(ultimo==JOGADOR_DOIS){
                    vitoria_2++;
                }
                console.clear();
                console.log("o vencedor da ultima partida  foi " + ultimo + " na vertical.");
                console.log("jogador 1 ganhou " + vitoria_1 + " vezes ;" + " E o jogador 2 ganhou " + vitoria_2 + " vezes.");
                console.log("de um total de "+ total_partidas+ " partida(s).");
                
                acabou = true;

                break;
            }
    }

   //linhas horizontais
    for (let y=0; y < 3; y++) {
        if (matrizJogo[0][y] !== 0 && 
            matrizJogo[0][y] === matrizJogo[1][y] &&
            matrizJogo[0][y] === matrizJogo[2][y] ) {
                var c3Canvas = document.getElementById("c3");
                var c3Ctx = c3Canvas.getContext("2d");
                //passa para a variavel o jogador que deu o ultimo click
                

                var ultimo = obtemJogada();
                if(ultimo== JOGADOR_UM){
                    vitoria_1++;
                    
                }
                if(ultimo==JOGADOR_DOIS){
                    vitoria_2++;
                }
                console.clear();
                console.log("o vencedor da ultima partida  foi " + ultimo + " na Horizontal.");
                console.log("jogador 1 ganhou " + vitoria_1 + " vezes;" + " E o jogador 2 ganhou " + vitoria_2 + " vezes.");
                console.log("de um total de "+ total_partidas+ " partida(s).");
                

                acabou = true;
                
                break;
            
            }
        
    }
   
    //linhas diagonal1
    if (matrizJogo[0][0] !== 0 && 
        matrizJogo[0][0] === matrizJogo[1][1] &&
        matrizJogo[0][0] === matrizJogo[2][2] ) {
            //passa para a variavel o jogador que deu o ultimo click
            var c2Canvas = document.getElementById("c2");
            var c2Ctx = c2Canvas.getContext("2d");
            var ultimo = obtemJogada();
            if(ultimo == JOGADOR_UM){
                vitoria_1++;
              
            }
            if(ultimo==JOGADOR_DOIS){
                vitoria_2++;   
            }
            
            console.clear();
            console.log("o vencedor da ultima partida foi  " +  ultimo  + " na Diagonal 1 .");
            console.log("jogador 1 ganhou " + vitoria_1 + " vezes;" + "E o jogador 2 ganhou " + vitoria_2 + " vezes.");
            console.log("de um total de "+ total_partidas+ " partida(s).");
            acabou = true;
            
    }
    //linha diagonal2
    if (matrizJogo[2][0] !== 0 && 
        matrizJogo[2][0] === matrizJogo[1][1] &&
        matrizJogo[2][0] === matrizJogo[0][2] ) {
            //passa para a variavel o jogador que deu o ultimo click
            var c1Canvas = document.getElementById("c1");
            var c1Ctx = c1Canvas.getContext("2d");
            var ultimo = obtemJogada();
            if(ultimo== JOGADOR_UM){
             
                vitoria_1++;
              
                
            }
            if(ultimo==JOGADOR_DOIS){
                vitoria_2++;  
            }
            console.clear();
            console.log("o vencedor da ultima partida  foi "  +  ultimo  +  " na Diagonal 2 .");
            console.log("jogador 1 ganhou " + vitoria_1 + " vezes;" + "E o jogador 2 ganhou " + vitoria_2 + " vezes.");
            console.log("de um total de " + total_partidas+ " partida(s).");
            acabou = true;
    }
    
    return acabou;
   
}
function limpaJogo() {
    matrizJogo = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    total_partidas++;
}
function desenhaJogadasNoGrid() {
    for (let x=0; x < matrizJogo.length; x++) {
        for (let y=0; y <  matrizJogo[x].length; y++) {
            if (matrizJogo[x][y] !== 0) {
                desenhaXouONoTile(matrizJogo[x][y], x, y);
            }
        }
    }
}
function desenhaTelaDoJogo () {
    //desenha grid preto
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,LARGURA_GAME, ALTURA_GAME);
    //desenha divisorias verticais
    ctx.fillStyle = "#000000";
    ctx.fillRect(LARGURA_TILE,0, LARGURA_DIVISORIA, ALTURA_GAME);
    ctx.fillRect(LARGURA_TILE*2+LARGURA_DIVISORIA,0, LARGURA_DIVISORIA, ALTURA_GAME);
    //desenha divisorias horizontais
    ctx.fillRect(0, ALTURA_TILE, LARGURA_GAME, LARGURA_DIVISORIA);
    ctx.fillRect(0, ALTURA_TILE*2+LARGURA_DIVISORIA, LARGURA_GAME, LARGURA_DIVISORIA);
    //resesta a cor para preto
    ctx.fillStyle = "#000000";
}
function desenhaXouONoTile(jogada, tileX, tileY) {
    ctx.fillStyle = "#00008B";
    ctx.font = "60px monospace";
    margemX = tileX * LARGURA_DIVISORIA;
    margemY = tileY * LARGURA_DIVISORIA;
    ctx.fillText(jogada, LARGURA_TILE * tileX + (LARGURA_TILE/3) + margemX, ALTURA_TILE * tileY + (ALTURA_TILE / 1.5) + margemY);
    ctx.fillStyle = "#00008B";
}

// retorna o clique do mouse ja convertido em quadrante
function capturaClique(evento) {
    let mouseX = evento.offsetX;
    let mouseY = evento.offsetY;

    let tileX = Math.floor(mouseX / (LARGURA_TILE + ((2*LARGURA_DIVISORIA)/3)));
    let tileY = Math.floor(mouseY / (ALTURA_TILE + ((2*LARGURA_DIVISORIA)/3)));

    console.log(`quadrante ${tileX} - ${tileY}`);

    adicionaJogadaNaMatriz(tileX, tileY);
}

   function desenhaHorizontal() {
   
    ctx.moveTo(160,160);
    ctx.lineTo(320,0);
    ctx.stroke();
   }


//play
setup();