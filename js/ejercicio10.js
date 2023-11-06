let filas = parseInt(prompt(`Ingrese la cantidad de filas`));
let columnas = parseInt(prompt(`Ingrese la cantidad de columnas`));
let celdasTotales = filas * columnas;

document.write(`<table><tbody>`);
for(let indiceFilas = 0; indiceFilas < filas; indiceFilas++){
    document.write(`<tr>`);
    for(let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++){
        document.write(`<td>${celdasTotales}</td>`);
        celdasTotales--;
    }
    document.write(`</tr>`);
}
document.write(`</tbody></table>`);