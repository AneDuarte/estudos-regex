const texto = '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f';

const regexNove = RegExp('9');
console.log('Métodos da RegExp:');
console.log(regexNove.test(texto)); //vai testar o regex e retornar true ou false
console.log(regexNove.exec(texto)); //executa o regex

const regexLetras = /[a-f]/g;
console.log('Métodos da string:');
console.log(texto.match(regexLetras)); //executa um regex em cima do texto
console.log(texto.search(regexLetras)); //pesquisa e retorna o indice do primeiro caracter q combina com o regex passado
console.log(texto.replace(regexLetras, 'Achei!')); //subsitui um elemento encontrado pelo regex por outro texto
console.log(texto.split(regexLetras)); //faz um array quebrando partes do texto a partir do regex