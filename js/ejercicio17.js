let texto = prompt("Introduce un texto:");
let primeraVocal = null;

for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();
    if ("aeiou".includes(letra)) {
        primeraVocal = i;
        break;
    }
}

if (primeraVocal !== null) {
    document.write(`La primera vocal '${texto[primeraVocal]}' está en la posición ${primeraVocal}`);
} else {
    document.write("No se encontraron vocales en el texto.");
}