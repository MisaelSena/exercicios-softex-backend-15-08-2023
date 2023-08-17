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