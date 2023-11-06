let texto = prompt(`Introduce una cadena de texto: `);
let textoRes = "";

for(let i = 0; i < texto.length; i++){
    textoRes += texto[i];
    if(i !== texto.length - 1){
        textoRes += "-";
    }
}

document.write(`El texto resultante es: ${textoRes}`);