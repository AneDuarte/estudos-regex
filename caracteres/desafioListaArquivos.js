const texto = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3';
console.log(texto.match(/\.mp3/g));

//Para calcular a quantidade de arquivos mp3
const teste = texto.split(/\.mp3/g);
console.log(teste.length - 1);