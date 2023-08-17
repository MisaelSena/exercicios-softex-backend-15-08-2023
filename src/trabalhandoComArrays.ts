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
