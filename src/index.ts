import { imprimeTabelaMultiplicacao, imprimeUmACinquentaSoftex, sequenciaDeCollatz, verificaNumeroPrimo } from "./combinandoLacosEestruturas";
import { calculadora, verficaImparOuPar, verificaAnoBissexto, verificaPalindromo, verificaPositivoENegativo } from "./controlesCondicionais";
import { fibonacciAteDecimoTermo, imprimeDeZeroAVinte, imprimeUmADez, multiplosDeTres, produtoDeUmACinco, somaDeUmACem } from "./loops";
import { celsiusParaFahrenheit, fatorial, inverteString, maiorValor, mediaArray, removeDuplicadosDoArray } from "./outrosConceitosBasicos";
import { arrayOrdCrescente, mairoValorArrayNumeros } from "./trabalhandoComArrays";
import { contaLetraNaString, contaVogais, converteStringEmMaiuscula, removeEspacos } from "./trabalhandoComStrings";

//Laços de Repetição (Loops):
imprimeUmADez();

somaDeUmACem();

imprimeDeZeroAVinte();

produtoDeUmACinco();

fibonacciAteDecimoTermo();

multiplosDeTres();

//Estruturas de Controle Condicionais:
verificaPositivoENegativo(10);

verficaImparOuPar(5);

verificaAnoBissexto(1824);

calculadora("*",8,10);

verificaPalindromo("Ana");

//Outros Conceitos Básicos:
fatorial(5);

maiorValor(20,3,145);

celsiusParaFahrenheit(20);

mediaArray(2,3,8);

removeDuplicadosDoArray();//FALTA CONCLUIR

inverteString("Misael");

//Combinando Laços e Estruturas Condicionais:
imprimeUmACinquentaSoftex();

imprimeTabelaMultiplicacao();

sequenciaDeCollatz(15);

verificaNumeroPrimo(6);

contaVogais("Misael");

converteStringEmMaiuscula("Misael");

removeEspacos("Misael M A Sena");

contaLetraNaString("Misael M A Sena","M");

//Arrays
arrayOrdCrescente();

mairoValorArrayNumeros();