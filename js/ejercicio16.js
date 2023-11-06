let texto = prompt(`Introduce un texto: `);
let textoRes = "";

for(let i = texto.length - 1; i >= 0; i--){
    textoRes += texto[i];
}

document.write(`El texto al revés es: ${textoRes}`);