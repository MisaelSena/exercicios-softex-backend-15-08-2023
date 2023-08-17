import { calculadora, verficaImparOuPar, verificaAnoBissexto, verificaPalindromo, verificaPositivoENegativo } from "./controlesCondicionais";
import { fibonacciAteDecimoTermo, imprimeDeZeroAVinte, imprimeUmADez, multiplosDeTres, produtoDeUmACinco, somaDeUmACem } from "./loops";
import { fatorial } from "./outrosConceitosBasicos";

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