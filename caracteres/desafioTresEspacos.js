const texto = 'a   b';
console.log(texto.match(/a...b/));
console.log(texto.match(/a   b/));
console.log(texto.match(/a\s\s\sb/));
console.log(texto.match(/a\s.\sb/));
console.log(texto.match(/a\s .b/));
console.log(texto.match(/a\s+b/)); //+ está significando que pode ter mais \s
console.log(texto.match(/a {3}b/)); 
console.log(texto.match(/a\s{3}b/)); //{3} serve para quantificar