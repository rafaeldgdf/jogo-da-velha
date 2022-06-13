const prompt = require ("prompt-sync")(); 
console.clear()
function titulo(){console.log("###JOGO DA VELHA###");
console.log(); 
console.log(); 
}
titulo();

function tutorial (){
console.log();
console.log(`
Tutorial:
1. Defina com o seu desafiante quem será o jogador 'X' e quem será o jogador 'O'.
2. Para executar sua jogada, deve-se escolher um número disponível no tabuleiro a amostra na sua rodada.
3. Em caso de #VELHA#, ou seja, empate entre os jogadores, digite "#" a qualquer momento no console para zerar o tabuleiro e iniciar uma nova rodada.
4. Se desejar sair do jogo, digite "sair" a qualquer momento no console para encerrar o jogo. 
5. As regras de jogo e as condições de vitória seguem os padrões do tradicional Jogo da Velha. 
`)
console.log();
console.log();
console.log();
}
tutorial();
let iniciar = prompt("Deseja jogar? ").toLowerCase();
console.clear()

let arraynumero = [1,2,3,4,5,6,7,8,9, "1", "2", "3","4", "5", "6", "7", "8", "9","#", "sair", "SAIR"]; 
let linha1 = [[],[],[]];
let linha2 = [[],[],[]];
let linha3 = [[],[],[]];



titulo(); 
zerar();
tabuleiro();

let vitoriax = 0
let vitoriao = 0 
let empate = 0
let x = "X"
let o = "O"


function jogarnovamente(){
    a = prompt('Deseja jogar novamente? ').toLowerCase()
    if (a != "sim"){
        return true
    }else {return false};
    
}
function zerar (){
    linha1[0][0] = 1;
    linha1[1][0] = 2;
    linha1[2][0] = 3; 
    linha2[0][0] = 4;
    linha2[1][0] = 5;
    linha2[2][0] = 6; 
    linha3[0][0] = 7;
    linha3[1][0] = 8;
    linha3[2][0] = 9; 

   
}
function tabuleiro (){
    console.log (linha1); 
    console.log (linha2);
    console.log (linha3);
    console.log()
    console.log()
}

while (iniciar ==  "sim") {

let jogar1 = prompt(`JOGADOR "X" EFETUE SUA JOGADA: `).toLowerCase();
if (jogar1 == "sair") {break} 

////////////////////// jogada  invalida "X" /////////////////////////////  
function invalido() { {while (!arraynumero.includes(jogar1)) {
console.log ("Jogada inválida, escolha um número disponível no tabuleiro. ");
jogar1 = +prompt(`JOGADOR "X" EFETUE SUA JOGADA: `);
} }
}
invalido();
////////////////////// jogadas  válidas "X" /////////////////////////////


if (jogar1 == "#")
{empate++
console.clear();
titulo();
tutorial ();
zerar(); 
}


if (jogar1 == "1"){
    if (linha1[0][0] == 1){
        linha1[0][0] = x;
    }else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez. ");
           jogar1 = prompt(`JOGADOR "X" EFETUE SUA JOGADA: `);
    }   
}

if (jogar1 == 2 ){
   if(linha1[1][0] == 2){
      linha1[1][0] = x; 
}  else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez. ");
        jogar1 = prompt(`JOGADOR "X" EFETUE SUA JOGADA: `);
    }
}

if (jogar1 == 3){
    if (linha1[2][0] == 3){
    linha1[2][0] = x;
}   else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez.");
          jogar1 = prompt(`JOGADOR "X" EFETUE SUA JOGADA: `);
         }
}

if (jogar1 == 4) {
    if(linha2[0][0] == 4){
    linha2[0][0] = x
}   else{console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez.");
         jogar1 = prompt(`JOGADOR "X" EFETUE SUA JOGADA: `);
        }         
}

if (jogar1 == 5) {
    if(linha2[1][0] == 5){
    linha2[1][0] = x;
}   else{console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez. ");
         jogar1 = prompt(`JOGADOR "X" EFETUE SUA JOGADA: `);
        }         
        
}

if (jogar1 == 6) {
    if(linha2[2][0] == 6){
    linha2[2][0] = x;
}   else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez.");
          jogar1 = prompt(`JOGADOR "X" EFETUE SUA JOGADA: `);
         }
}         

if (jogar1 == 7) {
   if (linha3[0][0] == 7){
   linha3[0][0] = x;
}  else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez. ");
        jogar1 = prompt(`JOGADOR "X" EFETUE SUA JOGADA: `);
        }         
}

if (jogar1 == 8) {
    if (linha3[1][0] == 8){
    linha3[1][0] = x
} else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez. ");
        jogar1 = prompt(`JOGADOR "X" EFETUE SUA JOGADA: `);
       }             
}

if (jogar1 == 9) {
    if (linha3[2][0] == 9){
    linha3[2][0] = x; 
} else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez. ");
       jogar1 = prompt(`JOGADOR "X" EFETUE SUA JOGADA: `);
       }                
}

tabuleiro();

//////condições jogador "X" ganhando////////////////////////////
if (linha1[0][0] == x && linha1[1][0] == x && linha1[2][0] == x){
    vitoriax++
    console.log();
    console.log();
    console.log("O jogador 'X' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
} if (linha2[0][0] == x && linha2[1][0] == x && linha2[2][0] == x){
    vitoriax++ 
    console.log();
    console.log();
    console.log("O jogador 'X' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
} if (linha3[0][0] == x && linha3[1][0] == x && linha3[2][0] == x){
    vitoriax++ 
    console.log();
    console.log();
    console.log("O jogador 'X' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
} if (linha1[0][0] == x && linha2[0][0] == x && linha3[0][0] == x){
    vitoriax++ 
    console.log();
    console.log();
    console.log("O jogador 'X' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
} if (linha1[1][0] == x && linha2[1][0] == x && linha3[1][0] == x){
    vitoriax++ 
    console.log();
    console.log();
    console.log("O jogador 'X' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
} if (linha1[2][0] == x && linha2[2][0] == x && linha3[2][0] == x){
    vitoriax++ 
    console.log();
    console.log();
    console.log("O jogador 'X' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
} if (linha1[0][0] == x && linha2[1][0] == x && linha3[2][0] == x){
    vitoriax++ 
    console.log();
    console.log();
    console.log("O jogador 'X' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
} if (linha1[2][0] == x && linha2[1][0] == x && linha3[0][0] == x){
    vitoriax++ 
    console.log();
    console.log();
    console.log("O jogador 'X' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
}


//////////////////////////////////////////////////////////////////////////


let jogar2 = prompt(`JOGADOR "O" EFETUE SUA JOGADA: `).toLowerCase();
if (jogar2 == "sair") {break}
////////////////////// jogada  inválida "O" ///////////////////////////// 
while (!arraynumero.includes(jogar2)) {
    console.log ("Jogada inválida, escolha um número disponível no tabuleiro. ");
    jogar2 = +prompt(`JOGADOR "O" EFETUE SUA JOGADA: `);
    } 
/////////////////// jogadas válidas "O" ////////////////////////////

if (jogar2 == "#")
{empate++
console.clear();
titulo();
tutorial ();
zerar(); 
}


if (jogar2 == 1){
    if (linha1[0][0] == 1){
        linha1[0][0] = o;
    } else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez. ");
           jogar2 = prompt(`JOGADOR "O" EFETUE SUA JOGADA: `);
           }         
}

if (jogar2 == 2 ){
    if(linha1[1][0] == 2){
    linha1[1][0] = o; 
    }else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez. ");
           jogar2 = prompt(`JOGADOR "O" EFETUE SUA JOGADA: `);
          }         
}


if (jogar2 == 3){
    if (linha1[2][0] == 3){
    linha1[2][0] = o;
    }else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez. ");
          jogar2 = prompt(`JOGADOR "O" EFETUE SUA JOGADA: `);
          }                   
}

if (jogar2 == 4) {
    if(linha2[0][0] == 4){
    linha2[0][0] = o;
    }else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez. ");
    jogar2 = prompt(`JOGADOR "O" EFETUE SUA JOGADA: `);
          }         
}


if (jogar2 == 5) {
    if(linha2[1][0] == 5){
    linha2[1][0] = o;
    }else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez.");
           jogar2 = prompt(`JOGADOR "O" EFETUE SUA JOGADA: `);
           }         
}


if (jogar2 == 6) {
    if(linha2[2][0] == 6){
    linha2[2][0] = o;
    }else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez. ");
            jogar2 = prompt(`JOGADOR "O" EFETUE SUA JOGADA: `);
          }         
}


if (jogar2 == 7) {
   if (linha3[0][0] == 7){
   linha3[0][0] = o;
    }else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez.");
           jogar2 = prompt(`JOGADOR "O" EFETUE SUA JOGADA: `);
          }         
}

if (jogar2 == 8) {
    if (linha3[1][0] == 8){
    linha3[1][0] = o
    }else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez.");
          jogar2 = prompt(`JOGADOR "O" EFETUE SUA JOGADA: `);
          }         
}
  
if (jogar2 == 9) {
    if (linha3[2][0] == 9){
    linha3[2][0] = o; 
    }else {console.log ("Jogada inválida, escolha um número disponível no tabuleiro. Caso insista no erro, perderá a vez. ");
          jogar2 = prompt(`JOGADOR "O" EFETUE SUA JOGADA: `);
          }         
}

tabuleiro();

//////condições jogador "O" ganhando////////////////////////////

if (linha1[0][0] == o && linha1[1][0] == o && linha1[2][0] == o){
    vitoriao++ 
    console.log();
    console.log();
    console.log("O jogador 'O' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    tutorial ();
    zerar();
    tabuleiro(); 
} if (linha2[0][0] == o && linha2[1][0] == o && linha2[2][0] == o){
    vitoriao++ 
    console.log();
    console.log();
    console.log("O jogador 'O' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
} if (linha3[0][0] == o && linha3[1][0] == o && linha3[2][0] == o){
    vitoriao++ 
    console.log();
    console.log();
    console.log("O jogador 'O' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
} if (linha1[0][0] == o && linha2[0][0] == o && linha3[0][0] == o){
    vitoriao++ 
    console.log();
    console.log();
    console.log("O jogador 'O' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
} if (linha1[1][0] == o && linha2[1][0] == o && linha3[1][0] == o){
    vitoriao++ 
    console.log();
    console.log();
    console.log("O jogador 'O' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
} if (linha1[2][0] == o && linha2[2][0] == o && linha3[2][0] == o){
    vitoriao++ 
    console.log();
    console.log();
    console.log("O jogador 'O' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
} if (linha1[0][0] == o && linha2[1][0] == o && linha3[2][0] == o){
    vitoriao++ 
    console.log();
    console.log();
    console.log("O jogador 'O' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
} if (linha1[2][0] == o && linha2[1][0] == o && linha3[0][0] == o){
    vitoriao++ 
    console.log();
    console.log();
    console.log("O jogador 'O' venceu");
    console.log();
    if (jogarnovamente()){break};
    console.clear();
    titulo();
    zerar();
    tabuleiro(); 
}

}

if (iniciar != "sim") {console.clear();
console.log ("Adeus!")}

if (iniciar == "sim"){
console.log(`
    ###PLACAR### 
    Vitórias jogador "X": ${vitoriax}
    Vitórias jogador "O": ${vitoriao}
    Empates: ${empate}`);
}


