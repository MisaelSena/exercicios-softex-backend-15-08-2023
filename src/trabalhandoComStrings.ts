//Conte quantas vogais há em uma string
export function contaVogais(palavra:string) {
    
    palavra = palavra.toLocaleLowerCase();
    let contVogais = 0;
    for (let i = 0; i < palavra.length; i++) {
          if (palavra[i]=="a"||palavra[i]=="e"||palavra[i]=="i"||palavra[i]=="o"||palavra[i]=="u") {
            contVogais++;
          }      
    }
    console.log(`A quantidade de Vogais na palavra ${palavra} é: ${contVogais}`);
}
//Converta uma string para maiúsculas.
export function converteStringEmMaiuscula(palavra:string) {
    
    palavra = palavra.toLocaleUpperCase();       
    console.log(`String em maiúscula: ${palavra}`);
}

//Remova os espaços em branco de uma string.
export function removeEspacos() {
    let palavra = "Misael M A Sena";
    let palavraSemEspaco = palavra.split(' ').join('');
    console.log(`String com Espaços: ${palavra}`);       
    console.log(`String sem Espaços: ${palavraSemEspaco}`);
}