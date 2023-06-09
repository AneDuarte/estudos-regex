// \u é usado para passar o unicode
const texto = 'aʬc௵d';
console.log(texto.match(/\u02AC|\u0BF5/));
console.log(texto.match(/\u02AC|\u0BF5/g));