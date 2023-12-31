export function verificaPositivoENegativo(numero:number) {    

    if (numero > 0) {
        console.log(`O Número ${numero} é positivo!`);
    } else if(numero<0){
        console.log(`O Número ${numero} é Negativo!`);
    }else{
        console.log(`O Número ${numero} é neutro!`);
    }
}

export function verficaImparOuPar(numero:number) {
    
    let modulo = numero % 2;

    if (modulo!==0) {
        console.log(`O Número ${numero} é Ímpar!`);
    } else {
        console.log(`O Número ${numero} é Par!`);
    }
}

export function verificaAnoBissexto(ano:number) {
    let modulo4 = ano % 4;
    let modulo100 = ano % 100;
    let modulo400 = ano % 400;

    if (modulo4 === 0 || modulo100 === 0 || modulo400 === 0) {
        console.log(`O Ano ${ano} é Bissexto!`);
    } else {
        console.log(`O Ano ${ano} Não é Bissexto!`);
    }
}

export function calculadora(operacao: string, numero1: number, numero2: number) {
    let resultado;
    switch (operacao) {
        case "+":
            resultado = numero1 + numero2;
            console.log(`O resultado da Soma entre os números ${numero1} e ${numero2} é: ${resultado}`);
            break;
        case "-":
            resultado = numero1 - numero2;
            console.log(`O resultado da Subtração entre os números ${numero1} e ${numero2} é: ${resultado}`);
            break;
        case "*":
            resultado = numero1 * numero2;
            console.log(`O resultado da Multiplicação entre os números ${numero1} e ${numero2} é: ${resultado}`);
            break;
        case "/":
            resultado = numero1 / numero2;
            console.log(`O resultado da Soma Divisão os números ${numero1} e ${numero2} é: ${resultado}`);
            break;
        default:
            console.log("Operação informada incorreta!");            
            break;
    }
}

export function verificaPalindromo(palavra: string) {
    palavra = palavra.toUpperCase();
    let palavraIvertida = palavra.split('').reverse().join('');

    if (palavra === palavraIvertida) {
        console.log(`A Palavra "${palavra}" é um palíndromo!`);
    } else {
        console.log(`A Palavra "${palavra}" não é um palíndromo!`);
    }
} 