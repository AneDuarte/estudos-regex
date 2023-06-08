//g - global (vai procurar todas as ocorencias no texto do caractere passado)
//i - ignore case (ignorar se é maisucula ou minuscula)

const texto = 'Carlos assinou o abaixo-assinado.';
console.log(texto.match(/C|ab/));
console.log(texto.match(/c|ab/i));
console.log(texto.match(/ab|c/gi));