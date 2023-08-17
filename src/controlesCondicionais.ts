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