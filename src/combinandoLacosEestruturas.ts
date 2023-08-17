//Imprima os números de 1 a 50, mas para múltiplos de 3 imprima "Sof" e para múltiplos de 5 imprima "Tex".
export function imprimeUmACinquentaSoftex() {
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