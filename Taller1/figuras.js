// para el cuadrado
console.group("Cuadrado");   // para agrupar los console.log

// const ladoCuadrado = 5;
// console.log("El lado del cuadrado es: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
   return lado * 4;
} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado +"cm");

function areaCuadrado (lado){
    return lado * lado; 
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();     // para cerrar el grupo de console.log

///////////////////////////////////////////////////////////////////////////////////

// Para el triángulo
console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 7;

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// const alturaTriangulo = 5.5;
function areaTriangulo (base, altura){
    return (base*altura)/2;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

/////////////////////////////////////////////////////////////////////////////
// Para el circulo
console.group("Circulo");
const PI = Math.PI;
// console.log ("El valor de PI es: " + PI);

// const radioCirculo = 4;
function diametroCirculo (radio){
    return radio * 2;
} 
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

function areaCirculo(radio){
    return PI * radio * radio;
}

// console.log("El area del circulo es: " + areaCirculo + "cm^2");

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
console.groupEnd();

////// AQUÍ INTERACTUAMOS CON HTML //////

function calcularPerimetroCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value
const perimetro = perimetroCuadrado(value);
alert (perimetro + "cm");
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value
    const area = areaCuadrado(value);
    alert (area + "cm^2");
}


///// EJERCICIO EXTRA, PARA EL TRIANGULO /////
function alturaTrianguloIsoscelesExtra(lado1, lado2, base){
    if ( lado1 === lado2){
        console.log("El triángulo si es isósceles");
        // const lado = document.getElementById("InputLadosTriangulo");
        // const valorLado = lado.value;

        const altura = Math.sqrt((lado1*lado1)- ((base/2)*(base/2)));
        console.log("La altura del triángulo es: " + altura + "cm");
        return altura;
        
    } else {
        console.log("El triángulo no es isósceles, no se pudo calcular su area");
        return null;
    }

}


// function alturaTrianguloIsoscelesHTML(){

//     const lado1 = document.getElementById("InputLado1Triangulo");
//     valorLado1 = lado1.value;
//     const lado2 = document.getElementById("InputLado2Triangulo");
//     valorLado2 = lado2.value;
//     const base = document.getElementById("InputBaseTriangulo");
//     valorBase = base.value;

//     if ( valorlado1 == valorlado2){
//         alert("El triángulo si es isósceles");
//         const altura = Math.sqrt((valorLado1*valorLado1)- ((valorBase/2)*(valorBase/2)));
//         alert("La altura del triángulo es: " + altura + "cm");
//     } else {
//         alert("El triángulo no es isósceles, no se pudo calcular su area");
//     }

// }
