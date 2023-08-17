//Crie um array de números e ordene-o em ordem crescente.

export function arrayOrdCrescente() {
  let numeros = [3, 2, 4, 5, 6, 1, 8];
  console.log("Array Números não ordenados: " + numeros);
  console.log("Array Números ordenados: " + numeros.sort());
}

//Encontre o maior valor em um array de números.

export function mairoValorArrayNumeros() {
  let numeros = [3, 2, 4, 5, 6, 1, 8];
  console.log(
    "No Array: [" + numeros + "] o maior valor é: " + Math.max(...numeros)
  );
}

//Crie um array de nomes e ordene-o em ordem alfabética.
export function arrayOrdAlfabetica() {
    let nomes = ["Misael","Andreza","Elisson"];
    console.log("Array Nomes não ordenados: [" + nomes+"]");
    console.log("Array Nomes em ordem alfabética: [" + nomes.sort()+"]");
  }
//Crie um programa que some os elementos de dois arrays de mesma dimensão, criando um terceiro array com os resultados.
export function somaDoisArrays() {
    let lista1 = [1,2,3];
    let lista2 = [4,5,6];
    let soma = 0;
    let somaElementosArray = [];

    for (let i = 0; i < lista1.length; i++) {
        soma = lista1[i]+lista2[i];
        somaElementosArray.push(soma);        
    }
    console.log(`Array 1:[${lista1}]`);
    console.log(`Array 2:[${lista2}]`);
    console.log(`Elementos de mesma posição dos Arrays 1 e 2 somados:[${somaElementosArray}]`);
}

