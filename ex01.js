const prompt = require("prompt-sync")();
console.clear();

let numero = +prompt("Digite um número: ");

let qtdNumerosDivisiveis = 0;

for (let i = 1; i <= numero; i++) {
  let restoDivisao = numero % i;
  if (restoDivisao === 0) {
    qtdNumerosDivisiveis++;
  }
  //console.log({numero, i, restoDivisao, qtdNumerosDivisiveis});
}

if (qtdNumerosDivisiveis === 2) {
  console.log(`O número ${numero} é primo!`);
} else {
  console.log(`O número ${numero} não é primo!`);
}
