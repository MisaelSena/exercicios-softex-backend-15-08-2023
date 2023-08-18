export function fatorial(numero: number) {
  let fatorial = 1; //Se o número for zero, o fatorial será 1
  if (numero < 0) {
    console.log(
      `O numero ${numero}informado é negativo e não possui fatorial!`
    );
  } else if (numero === 0) {
    console.log(fatorial);
  } else {
    for (let i = 1; i <= numero; i++) {
      fatorial = fatorial * i;
    }
    console.log(fatorial);
  }
}

export function maiorValor(numero1: number, numero2: number, numero3: number) {
  let numeros = [];
  numeros.push(numero1, numero2, numero3);
  let maiorNumero = Math.max(...numeros);

  console.log(
    `O maior número entre (${numero1}, ${numero2}, ${numero3}) é o ${maiorNumero}`
  );
}

export function celsiusParaFahrenheit(grausCelsius: number) {
  //F=C×1.8+32
  let fahrenheit = grausCelsius * 1.8 + 32;

  console.log(`${grausCelsius}°C correspondem a ${fahrenheit}°F `);
}

export function mediaArray(numero1: number, numero2: number, numero3: number) {
  let numeros = [];
  numeros.push(numero1, numero2, numero3);
  let soma = 0;  

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  let media = soma / numeros.length;

  console.log(
    `A média entre (${numeros[0]}, ${numeros[1]}, ${numeros[2]}) é o ${media}`
  );
}

//Crie uma função que remova elementos duplicados de um array. FALTA

export function removeDuplicadosDoArray() {
    let lista = [1,2,3,5,6,8,9,2,4,5,6];
    
    let listaSemDuplicaddas = lista.filter((j,i)=>{return lista.indexOf(j)===i;});

    console.log("O array com os duplicados é:", lista);
    console.log("O array sem os duplicados é:", listaSemDuplicaddas);
    
}

export function inverteString(palavra: string) {
    let palavraIvertida = palavra.split('').reverse().join('');
    console.log(`Plavra: ${palavra} - Palavra Invertida: ${palavraIvertida}`);
}
