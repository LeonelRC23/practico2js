let nota = prompt(`Ingrese una nota (0-10)`);

while (
  nota != `0` &&
  nota != `1` &&
  nota != `2` &&
  nota != `3` &&
  nota != `4` &&
  nota != `5` &&
  nota != `6` &&
  nota != `7` &&
  nota != `8` &&
  nota != `9` &&
  nota != `10`
) {
    if(parseFloat(nota) > 10 || parseFloat(nota) < 0){
        alert(`Número ingresado no es válido.`);
    } else {
        alert(`Introduce un número válido.`);
    }

    nota = prompt(`Ingrese una nota (0-10)`);
}

if(parseFloat(nota) >= 0 && parseFloat(nota) <= 2){
    alert(`Su nota es ${parseInt(nota)}, MUY DEFICIENTE.`);
}

if(parseFloat(nota) >= 3 && parseFloat(nota) <= 4){
    alert(`Su nota es ${parseInt(nota)}, INSUFICIENTE.`);
}

if(parseFloat(nota) >= 5 && parseFloat(nota) <= 6){
    alert(`Su nota es ${parseInt(nota)}, SUFICIENTE.`);
}

if(parseFloat(nota) == 7){
    alert(`Su nota es ${parseInt(nota)}, BIEN.`);
}

if(parseFloat(nota) >= 8 && parseFloat(nota) <= 9){
    alert(`Su nota es ${parseInt(nota)}, NOTABLE.`);
}

if(parseFloat(nota) == 10){
    alert(`Su nota es ${parseInt(nota)}, SOBRESALIENTE.`);
}


