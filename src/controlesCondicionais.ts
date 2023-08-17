export function verificaPositivoENegativo() {
    let numero = -1;

    if (numero > 0) {
        console.log(`O Número ${numero} é positivo!`);
    } else if(numero<0){
        console.log(`O Número ${numero} é Negativo!`);
    }else{
        console.log(`O Número ${numero} é neutro!`);
    }
}

export function verficaImparOuPar() {
    let numero = 3;
    let modulo = numero % 2;

    if (modulo!==0) {
        console.log(`O Número ${numero} é Ímpar!`);
    } else {
        console.log(`O Número ${numero} é Par!`);
    }
}