/*3- Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
*****
*/

let numeroLinha = 5;
let asterisco = '*';
let resultado = '';
let position = numeroLinha;

for (let i = 0; i < numeroLinha; i += 1) {
for (let alti = 0; alti <= numeroLinha; alti += 1) {
if (alti < position) {
resultado = resultado + ' ';

}else{
    resultado = resultado + asterisco;
}
}  
  console.log(resultado);
  resultado = '';
  position -= 1;
}
