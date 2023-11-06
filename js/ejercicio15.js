let texto = prompt(`Introduce un texto: `)
let vocales = 0;

for(let i = 0; i < texto.length; i++){
    let letra = texto[i].toLowerCase();
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        vocales++;
    }
}

document.write(`El número de vocales en el texto es: ${vocales}`);