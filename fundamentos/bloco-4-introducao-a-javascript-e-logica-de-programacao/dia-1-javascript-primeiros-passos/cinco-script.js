const a = -60;
const b = -60;
const c = -40;
const angulo = a + b +c;
const anguloPositivo = a > 0 && b > 0 && c > 0;
if (angulo === 180) {
    console.log("true");
}else if (angulo < anguloPositivo){
    console.log("false");
}else {
    console.log('errou');
}

/* aqui para entrar no else if, isto é, para que entre no false, a soma de todos os angulos tem
que ser negativos, caso contrario, e nao sendo o valor do angulo, ele entra no else (errou)*/ 