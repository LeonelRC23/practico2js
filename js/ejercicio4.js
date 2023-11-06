let suma = 0;

do{
    let numero = parseFloat(prompt(`Ingrese un número para su posterior suma: `));

    if(isNaN(numero)){
        alert("El caracter ingresado no es un número. Siga ingresando números.");
    }else{
        suma = numero + suma;
    }
}while(confirm("¿Desea seguir ingresando números?"));

document.write(`La suma de todos los números ingresados es: ${suma}.`);