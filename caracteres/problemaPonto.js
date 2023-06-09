//o ponto age em cima do tab mas não da quebra de linha
//o dotall - algumas linguagens tem uma flag /exp/s, mas JS não!

const texto = 'Bom\ndia';
console.log(texto.match(/.../gi));
console.log(texto.match(/..../gi));