let numero = 1;
let aux = 1;

while(numero <= 500){
    document.write(numero);
    if(numero % 4 === 0){
        document.write(` (Múltiplo de 4)`)
    } else if(numero % 9 === 0){
        document.write(` (Múltiplo de 9)`)
    }
    if(numero % 5 == 0 ){
        document.write(`-`)
        document.write(`<br>`);
        document.write(`--------------------`);
    }

    document.write(`<br>`);
    numero++;
}