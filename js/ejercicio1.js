let edad = parseInt(prompt(`Ingrese su edad: `));

if(edad >= 18){
    document.write(`Usted ya puede conducir.`);
} else if(edad >= 0 && edad < 18){
    document.write(`Usted no tiene edad para conducir.`);
} else if(edad < 0){
    document.write(`Se ingreso una edad invalida.`);
}