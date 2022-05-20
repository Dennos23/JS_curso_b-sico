// para el cuadrado
console.group("Cuadrado");   // para agrupar los console.log
const ladoCuadrado = 5;
console.log("El lado del cuadrado es: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado +"cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();     // para cerrar el grupo de console.log


// Para el triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 7;

console.log(
    "Los lados del triangulo son: " 
    + ladoTriangulo1 
    + "cm"  
    + ladoTriangulo2 
    + "cm" 
    + baseTriangulo 
    + "cm"
) 
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const alturaTriangulo = 5.5;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Para el circulo
console.group("Circulo");
const PI = Math.PI;
console.log ("El valor de PI es: " + PI);

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

const areaCirculo = PI * radioCirculo * radioCirculo;
console.log("El area del circulo es: " + areaCirculo + "cm^2");

const perimetroCirculo = 2 * PI * radioCirculo;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
console.groupEnd();