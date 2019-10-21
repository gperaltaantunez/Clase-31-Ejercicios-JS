/*EJERCICIO 27

-Crear un documento con el nombre ej27.js
-Declarar 2 variables con los nombres numero1 y numero2
-Asignarle a cada variable un valor del tipo number
-Para cada operación mostrar el mensaje de la siguiente forma:
    Ejemplos: sumo 2 + 3 y el resultado es 5 (donde 2 y 3 son los valores de las variables y 5 es el resultado de la operación)
        Mostrar en consola el resultado de la suma de las dos variables
        Mostrar en consola el resultado de la resta de las dos variables
        Mostrar en consola el resultado de la multiplicación de las dos variables
        Mostrar en consola el resultado de la división de las dos variables
        Mostrar en consola el resultado del resto de las dos variables*/

console.log("Ejercicio 27");

let numero1 = 1;
let numero2 = 2;

let resultado = numero1 + numero2;
console.log(`Sumo ${numero1} + ${numero2} y el resultado es: ` + Number(resultado) );

resultado = numero1 - numero2;
console.log(`Resto ${numero1} - ${numero2} y el resultado es: ` + Number(resultado) );

resultado = numero1 * numero2;
console.log(`Multiplico ${numero1} * ${numero2} y el resultado es: ` + Number(resultado) );

resultado = numero1 / numero2;
console.log(`Divido ${numero1} / ${numero2} y el resultado es: ` + Number(resultado) );

resultado = numero1 % numero2;
console.log(`Modulo ${numero1} % ${numero2} y el resultado es: ` + Number(resultado) );

/*EJERCICIO 28

-Crear un documento con el nombre ej28.js
-Declarar la variable numero y asignar el valor 9
-Mostrar en consola la tabla del 9 de 1 a 10 usando la variable numero*/

console.log("Ejercicio 28");

let numero = 9;

console.log(` ${numero} * 1 = ` + Number(numero) * 1 );
console.log(` ${numero} * 2 = ` + Number(numero) * 2 );
console.log(` ${numero} * 3 = ` + Number(numero) * 3 );
console.log(` ${numero} * 4 = ` + Number(numero) * 4 );
console.log(` ${numero} * 5 = ` + Number(numero) * 5 );
console.log(` ${numero} * 6 = ` + Number(numero) * 6 );
console.log(` ${numero} * 7 = ` + Number(numero) * 7 );
console.log(` ${numero} * 8 = ` + Number(numero) * 8 );
console.log(` ${numero} * 9 = ` + Number(numero) * 9 );
console.log(` ${numero} * 10 = ` + Number(numero) * 10 );