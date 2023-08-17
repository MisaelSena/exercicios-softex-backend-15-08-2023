export function fatorial(numero: number) {
    let fatorial = 1;//Se o número for zero, o fatorial será 1
    if (numero<0) {
        console.log(`O numero ${numero}informado é negativo e não possui fatorial!`);
    }else if (numero===0) {
        console.log(fatorial);
    }else{
        for (let i = 1; i <= numero; i++) {
            
                fatorial = fatorial*i;
            
        }
        console.log(fatorial);
    }
}

export function maiorValor(numero1: number, numero2: number, numero3: number) {
    let numeros = [];
    numeros.push(numero1,numero2,numero3);
    let maiorNumero = Math.max(...numeros);

    console.log(`O maior número entre (${numero1}, ${numero2}, ${numero3}) é o ${maiorNumero}`);
}