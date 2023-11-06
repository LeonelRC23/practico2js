let textoRes = "";

do{
    let texto = prompt(`Ingrese una cadena de texto: `);

    if (textoRes !== "") {
        textoRes = texto + " - " + textoRes;
    } else {
        textoRes = texto;
    }

}while(confirm(`¿Desea seguir ingresando texto?`));

document.write(textoRes);
