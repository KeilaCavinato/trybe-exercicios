/*const myName = "Keila";
let birthCity = "santos";
let birthYear = 2030;

console.log(birthCity);
*/

/*let myName = 'keila';
let birthCity = 'Catetite';
let birthYear = 1985;
console.log(myName, birthCity, birthYear)
*/




/*Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number */
/*
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
console.log(typeof patientId, isEnrolled);
console.log(typeof patientInfo)
console.log(typeof patientEmail)
*/

/*Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo
*/
/*const base = 5;
let height = 8;
const area = base * height;
const perimeter = 5 * 2 + 8 * 2;
console.log(area);
console.log(perimeter);
*/

/*Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
Se a nota for menor que 60, imprima "Você foi reprovada(o)"
Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
Altere o valor da nota para verificar se as condições que você implementou funcionam; */

/*const nota = 35;
if (nota >= 80) {
    console.log("Parabens, você foi aprovado(a)!");
}
else if (nota <= 80 && nota >= 60) {
    console.log('Voce está na nossa lista de espera')
}
else if (nota < 60){
    console.log('voce foi reprovado');
}
else{
    
}
*/

/*const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
*/

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo); */

/*const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
*/

/*const currentHour = 14;
let message = '';
if (currentHour >= 22) {
    message = 'Nao deveriamos comer nada, é hora de dormir';
    console.log(message)
}else if(currentHour >= 18 && currentHour < 22){
     message = 'Rango da noite, vamos jantar :D';
     console.log(message)
}else if (currentHour >= 14 && currentHour <= 18){
    message = 'vamos fazer um bolo para o café da tarde?';
    console.log(message)

}else if (currentHour >= 11 && currentHour <= 14){
    message = 'Hora do almoço';
    console.log(message)
}else if (currentHour >= 4 && currentHour <= 11){
    message = 'Hmmm, cheiro de café recém passado';
  /*  console.log(message)

}else{

}
*/
/*const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}
*/
/*Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
Implemente condicionais para que:
Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU". */
/*
let weekDay = 'segunda-feira';
if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}else {
    console.log("FINALMENTE, descanso merecido UwU")
}
*/
/*console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);
*/
/*Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , ' */
/*
let processoSeletivo = "reprovada"; 
    switch (processoSeletivo) { 
        case "aprovada":
            console.log("Parabens!");
            break;
            case "lista":
                console.log("voce esta na lista de espera");
                break;
                case "reprovada":
                    console.log("voce nao passou");
                    break;
                    default:
                        console.log("nao identificado");
}
*/

// Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer
// essa função deve receber dois parâmetros: base e altura
// e retornar um objeto no formato: 
// { area: 0, perimetro: 0 }
// perimetro = (2*base) + (2*altura)
// area = base * altura

const base = 10
const altura = 5
perimetro = base ;
   function quadrilatero(base, altura) {
   return
   }

/* 1 - crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares 
 e ímpares no formato: 
 { pares: 0,
   impares: 0 } */

   /**
 * 
 *  Crie uma função que receba uma string word e outra string ending. 
 * Verifique se a string ending é o final da string word . Considere que a string ending 
 * sempre será menor que a string word. 
 * 
 * Valor de teste: 'trybe' e 'be'.
 * Valor esperado no retorno da função: true
 * 
 * verificaFimPalavra('trybe', 'be');
 * Retorno esperado: true
 * 
 * verificaFimPalavra('joaofernando', 'fernan');
 * Retorno esperado: false
 * 
 * 
 * USAR O SPLIT: 
*/

/**/