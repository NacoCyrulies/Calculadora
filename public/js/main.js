
num1 = 0;
num2 = 0;
operacion = 0;


function suma(num1, num2){
    document.getElementById("texto_sup").innerHTML = num1 + "+" + num2;
    return parseFloat(num1) + parseFloat(num2)
}

function resta(num1, num2){
    document.getElementById("texto_sup").innerHTML = num1 + "-" + num2;
    return parseFloat(num1) - parseFloat(num2)
}

function multiplicacion(num1, num2){
    document.getElementById("texto_sup").innerHTML = num1 + "*" + num2;
    return parseFloat(num1) * parseFloat(num2)
}

function division(num1, num2){
    document.getElementById("texto_sup").innerHTML = num1 + "/" + num2;
    return parseFloat(num1) / parseFloat(num2)
}

function potencia(num1, num2){
    document.getElementById("texto_sup").innerHTML = num1 + "^" + num2;
    return parseFloat(num1) ** parseFloat(num2)
}

function porcentaje(num1, num2){
    document.getElementById("texto_sup").innerHTML = num1 + "%" + num2;
    return parseFloat(num1) * parseFloat(num2) / 100
}



function escribir(num){
    let escrito = document.getElementById("texto").textContent;
    if (escrito == 0 && escrito != "0."){
        document.getElementById("texto").innerHTML = num;
    }
    else{
    document.getElementById("texto").innerHTML = escrito + num;
    }
};



function resultado(num1,num2){
    if (operacion==1){
        document.getElementById("texto").innerHTML = suma(num1,num2);
    }
    else if(operacion == 2){
        document.getElementById("texto").innerHTML = resta(num1,num2);
    }
    else if(operacion == 3){
        document.getElementById("texto").innerHTML = multiplicacion(num1,num2);
    }
    else if(operacion == 4){
        document.getElementById("texto").innerHTML = division(num1,num2);
    }
    else if(operacion == 5){
        document.getElementById("texto").innerHTML = potencia(num1,num2);
    }
    else if(operacion == 6){
        document.getElementById("texto").innerHTML = porcentaje(num1,num2);
    }
    else if(operacion == 7){
        document.getElementById("texto").innerHTML = Math.PI;
    }
}



document.getElementById("b_0").addEventListener( 'click', obj => {escribir(0)});
document.getElementById("b_1").addEventListener( 'click', obj => {escribir(1)});
document.getElementById("b_2").addEventListener( 'click', obj => {escribir(2)});
document.getElementById("b_3").addEventListener( 'click', obj => {escribir(3)});
document.getElementById("b_4").addEventListener( 'click', obj => {escribir(4)});
document.getElementById("b_5").addEventListener( 'click', obj => {escribir(5)});
document.getElementById("b_6").addEventListener( 'click', obj => {escribir(6)});
document.getElementById("b_7").addEventListener( 'click', obj => {escribir(7)});
document.getElementById("b_8").addEventListener( 'click', obj => {escribir(8)});
document.getElementById("b_9").addEventListener( 'click', obj => {escribir(9)});

document.getElementById("b_sumar").addEventListener( 'click', obj => {operacion=1 ; num1 = document.getElementById("texto").textContent; document.getElementById("texto").innerHTML = 0; document.getElementById("texto_sup").innerHTML = num1});

document.getElementById("b_restar").addEventListener( 'click', obj => {operacion=2 ; num1 = document.getElementById("texto").textContent; document.getElementById("texto").innerHTML = 0; document.getElementById("texto_sup").innerHTML = num1});

document.getElementById("b_multiplicar").addEventListener( 'click', obj => {operacion=3 ; num1 = document.getElementById("texto").textContent; document.getElementById("texto").innerHTML = 0; document.getElementById("texto_sup").innerHTML = num1});

document.getElementById("b_dividir").addEventListener( 'click', obj => {operacion=4 ; num1 = document.getElementById("texto").textContent; document.getElementById("texto").innerHTML = 0; document.getElementById("texto_sup").innerHTML = num1});

document.getElementById("b_potencia").addEventListener( 'click', obj => {operacion=5 ; num1 = document.getElementById("texto").textContent; document.getElementById("texto").innerHTML = 0; document.getElementById("texto_sup").innerHTML = num1});

document.getElementById("b_porcentaje").addEventListener( 'click', obj => {operacion=6 ; num1 = document.getElementById("texto").textContent; document.getElementById("texto").innerHTML = 0; document.getElementById("texto_sup").innerHTML = num1});

document.getElementById("b_pi").addEventListener( 'click', obj => {operacion=7 ; num1 = document.getElementById("texto").textContent ; resultado(0,0)});

document.getElementById("b_coma").addEventListener( 'click', obj => {document.getElementById("texto").innerHTML = (document.getElementById("texto").textContent) + "."});

document.getElementById("b_igual").addEventListener( 'click', obj => {num2 = document.getElementById("texto").textContent; resultado(num1,num2)});

document.getElementById("b_borrar").addEventListener( 'click', obj => {num1= 0 ; num2 = 0 ; document.getElementById("texto").innerHTML = 0; document.getElementById("texto_sup").innerHTML = ""});



