//Imprima os números de 1 a 50, mas para múltiplos de 3 imprima "Sof" e para múltiplos de 5 imprima "Tex".
export function imprimeUmACinquentaSoftex() {
    console.log('Imprime os números de 1 a 50, mas para múltiplos de 3 imprima "Sof" e para múltiplos de 5 imprima "Tex".');
    for (let i = 0; i <= 50; i++) {
        let modulo3 = i % 3;
        let modulo5 = i % 5;

        if (modulo3===0) {
            console.log("Sof");
        } else if(modulo5===0){
            console.log("Tex");
        }else{
            console.log(i);
        }
        
    }
}
//Crie um programa que imprima a tabela de multiplicação de 1 a 10.
export function imprimeTabelaMultiplicacao() {
    let resultado;
    for (let i = 1; i <= 10; i++) {
        console.log(`Tabuada de ${i}:`);
        for (let j = 1; j <= 10; j++) {
        resultado = i*j;                        
        console.log(`${i} X ${j} = ${resultado}`);
        }        
    }
}