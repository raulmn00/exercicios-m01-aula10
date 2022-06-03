const prompt = require("prompt-sync")();
console.clear();

/* 
Faça um programa que peça ao usuário digitar a população e a taxa de crescimento populacional de 2 países A e B, 
sendo que a população do país A deve ser menor que a de B, e a taxa de crescimento de A seja maior. 
Faça um programa que calcule e escreva o número de anos necessários 
para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
*/

// Peço ao usuário o número de habitantes no país A
let populacaoA = +prompt("Digite quantos habitantes temos no país A: ");

// Peço ao usuário a taxa de crescimento em % do país A
const taxaCrescimentoA = +prompt(
  "Digite quantos % equivale a taxa de crescimento da população do país A: "
);

// Peço ao usuário o número de habitantes do país B
let populacaoB = +prompt("Digite quantos habitantes temos no país B: ");

// Peço ao usuário a taxa de crescimento em % do país B
const taxaCrescimentoB = +prompt(
  "Digite quantos % equivale a taxa de crescimento da população do país B: "
);

let anos = 0;

// Multiplico a taxa de crescimento de cada país A e B por suas respectivas populações atuais e somo uma unidade em anos para cada vez que o laço while for repetido.
// O laço while em questão será repetido enquanto a população do país A for menor ou igual a população do país B 
while (populacaoA <= populacaoB) {
  populacaoA *= 1 + taxaCrescimentoA / 100;
  populacaoB *= 1 + taxaCrescimentoB / 100;
  anos++;
}

// Imprimo no console quantos anos serão necessários para que a população do país A ultrapasse a população do país B
console.log(`Será necessário ${anos} anos para que a população do país A ultrapsse a população do país B.`);
