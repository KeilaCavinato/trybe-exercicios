/*Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

const um = 6;
const dois = 13;
const tres = 11;
let numero = false;
if (um % 2 !== 0 || dois % 2 !== 0 || tres % 2 !==0){
    numero = true;
}
console.log(numero);
