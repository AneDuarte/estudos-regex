// . ? * + - ^$ | [ ] { } \ :

const texto = '1,2,3,4,5,6,a.b c!d?e';
const regexPonto = /\./g // o contra barra significa escape, serve para usar um metacaractere de forma literal
console.log(texto.split(regexPonto));

const regexSimbolos = /,|!|\.|\?| /g
console.log(texto.split(regexSimbolos));