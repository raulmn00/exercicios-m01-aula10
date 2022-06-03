const jogoDaVelha = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

// Atualização das jogadas;
const linhaDesejada = 0;
const colunaDesejada = 0;

const jogada = 'X';

jogoDaVelha[linhaDesejada][colunaDesejada] = jogada;

// Condições de vitória, empate e derrota;
const condicoesDeVitoria = [
    // Apenas colunas
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // Apenas linhas
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // Diagonais
    [0,4,8],
    [2,4,6]
];


console.log(jogoDaVelha);