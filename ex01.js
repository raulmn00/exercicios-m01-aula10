const prompt = require('prompt-sync')();
console.clear();

let numero = +prompt('Digite um número: ');

for (let i = 1; i <= numero; i++) {
    console.log(numero,i);
}