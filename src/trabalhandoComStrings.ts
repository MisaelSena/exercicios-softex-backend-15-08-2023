//Conte quantas vogais há em uma string
export function contaVogais(palavra:string) {
    
    palavra = palavra.toLocaleLowerCase();
    let contVogais = 0;
    for (let i = 0; i < palavra.length; i++) {
          if (palavra[i]=="a"||palavra[i]=="e"||palavra[i]=="i"||palavra[i]=="o"||palavra[i]=="u") {
            contVogais++;
          }      
    }
    console.log(`A quantidade de Vogais na palavra é: ${contVogais}`);
}