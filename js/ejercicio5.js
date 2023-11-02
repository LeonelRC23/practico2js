let dni = parseInt(prompt(`Ingrese el DNI (0 - 99999999): `));

while(isNaN(dni)){
    if(confirm("No se introdujo un número. ¿Desea volver a intentar?")){
        dni = parseInt(prompt(`Ingrese el DNI (0 - 99999999): `));
    } else{
        break;
    }
}

// while(isNaN(dni) || (dni > 99999999 && dni < 0)){
//     alert("No se ingreso un dni valido, vuelva a intentarlo.");
//     dni = parseInt(prompt(`Ingrese el DNI: `));
// }

let resto = dni % 23;

if(resto === 0){
    document.write("T");
} else if(resto === 1){
    document.write("R");
} else if(resto === 2){
    document.write("W");
} else if(resto === 3){
    document.write("A");
} else if(resto === 4){
    document.write("G");
} else if(resto === 5){
    document.write("M");
} else if(resto === 6){
    document.write("Y");
} else if(resto === 7){
    document.write("F");
} else if(resto === 8){
    document.write("P");
} else if(resto === 9){
    document.write("D");
} else if(resto === 10){
    document.write("X");
} else if(resto === 11){
    document.write("B");
} else if(resto === 12){
    document.write("N");
} else if(resto === 13){
    document.write("J");
} else if(resto === 14){
    document.write("Z");
} else if(resto === 15){
    document.write("S");
} else if(resto === 16){
    document.write("Q");
} else if(resto === 17){
    document.write("V");
} else if(resto === 18){
    document.write("H");
} else if(resto === 19){
    document.write("L");
} else if(resto === 20){
    document.write("C");
} else if(resto === 21){
    document.write("K");
} else if(resto === 22){
    document.write("E");
}