const prompt = require("prompt-sync")();
console.clear();

/* 
Peça ao usuário para digitar vários nomes (a quantidade deve ser escolhida por ele). 
Exiba na tela todos os nomes digitados, 
porém de maneira invertida (do último para o primeiro), 
apresente também o maior e o menor nome 
(caso haja empate, deve mostrar todos).
*/

const qtdNomes = +prompt("Digite a quantidade de nomes que deseja informar: ");

const nomes = [];

let maioresNomes = [];
let tamanhoMaiorNome;

let menoresNomes = [];
let tamanhoMenorNome;

for (let i = 1; i <= qtdNomes; i++) {
  // Peço para o usuário digitar um nome;
  let nome = prompt(`Digite o ${i}º nome: `);

  // Adiciono esse nome digitado ao array nomes[];
  nomes.push(nome);

  // Verificando qual o maior nome;
  if (tamanhoMaiorNome === undefined || tamanhoMaiorNome <= nome.length) {
    if (tamanhoMaiorNome < nome.length) {
      maioresNomes = [];
    }
    tamanhoMaiorNome = nome.length;
    maioresNomes.push(nome);
  }

  // Verificando qual o menor nome;
  if (tamanhoMenorNome === undefined || tamanhoMenorNome >= nome.length) {
    if (tamanhoMenorNome > nome.length) {
      menoresNomes = [];
    }
    tamanhoMenorNome = nome.length;
    menoresNomes.push(nome);
  }
}

// Inverto os itens da lista;
nomes.reverse();

// Imprimo na tela os nomes já invertidos pela função reverse();
console.log(nomes);

// Imprimo na tela a lista de maiores nomes;
console.log(`Lista de maiores nomes: ${maioresNomes}`);
// Imprimo na tela o maior nome;
console.log(`O maior nome digitado é: ${tamanhoMaiorNome}`);

// Imprimo na tela a lista de menores nomes;
console.log(`Lista de menores nomes: ${menoresNomes}`);
// Imprimo na tela o menor nome;
console.log(`O menor nome digitado é: ${tamanhoMenorNome}`);
