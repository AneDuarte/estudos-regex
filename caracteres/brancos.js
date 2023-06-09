// \n significa quebra de linha
// \t significa tab
// \s significa espaço, mas tbm pode usar o próprio espaço ' '

const texto = `
ca	r
r	o s!
`

console.log(texto.match(/ca/));
console.log(texto.match(/ca\tr\nr\to\ss!/));