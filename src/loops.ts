export function imprimeUmADez() {
    console.log("Imprimindo de 1 a 10 com for:");
    for (let i = 1; i <= 10; i++) {
        console.log(i);    
    }
}

export function somaDeUmACem() {
    let i = 0;
    let soma = 0;
 
    while (i<=100) {
     soma = soma + i;     
     i++;
    }
    console.log(`Soma dos números de 1 a 100 é: ${soma}`);
   
}

export function imprimeDeZeroAVinte() {
    console.log("Imprimindo de 0 a 20 com for:");
    for (let i = 0; i <= 20; i++) {
        console.log(i);    
    }
}