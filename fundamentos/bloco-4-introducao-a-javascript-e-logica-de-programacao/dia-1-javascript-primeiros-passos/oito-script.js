/**/
/*Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
leitura do if ( se o resto da divisao da const por 2 for igual a zero, entao é um numero par, o que retorna valor true)
*/
const um = 7;
const dois = 4;
const tres = 9;
let numero = false;
if (um % 2 === 0 || dois % 2 === 0 || tres % 2 === 0){
numero = true;
}
console.log(numero)

