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

/*EJERCICIO 29
-Crear un documento con el nombre ej29.js
-Calcular y mostrar en consola el perímetro de un cuadrado (el perímetro es simplemente cuatro veces la longitud del lado)
-La longitud del lado es de 10*/

console.log("Ejercicio 29");
console.log(`El perímetro de un cuadrado es` + " " + 4 * 10);

/*EJERICIO 30
-Crear un documento con el nombre ej30.js
-Calcular y mostrar en consola el área de un cuadrado (lado al cuadrado)
-La longitud del lado es de 5*/

console.log("Ejercicio 30");
console.log(`El área de un cuadrado es`+ " " + 5 ** 2 );

/*EJERICIO 31
-Crear un documento con el nombre ej31.js
-Calcular y mostrar en consola el perímetro de un triangulo (sumar los lados)
-El lado 1 es de 10
-El lado 2 es de 20
-El lado 3 es de 5*/

console.log("Ejercicio 31");

let lado1 = 10;
let lado2 = 20;
let lado3 = 5;

resultado = lado1 + lado2 + lado3;

console.log(`El perímetro de un triángulo es =` + " " + ` ${resultado} `);

/*EJERCICIO 32
-Crear un documento con el nombre ej32.js
-Declarar la variable altura y asignar el valor 10
-Declarar la variable base y asignar el valor 4
-Mostrar en consola el cálculo del perímetro (suma de los lados) y el área (base por altura).*/

console.log("Ejercicio 32");

let altura = 10;
let base = 4;

resultado = base * altura;

console.log(`El cálculo del área es =` + ` ${resultado} `);

/*EJERCICIO 33
-Crear un documento con el nombre ej33.js
-Declarar la variable cantidadDePersonas y asignar el valor 100
-Incrementar la cantidad de personas en 5
-Mostrar en consola la cantidad de personas en este momento y el mensaje: Cantidad de personas: cantidadDePersonas
-Se dieron de baja 3 personas
-Mostrar en consola la cantidad de personas en este momento y el mensaje: Cantidad de personas: cantidadDePersonas
-Compramos una empresa y los personas se duplicaron
-Mostrar en consola la cantidad de personas en este momento y el mensaje: Cantidad de personas: cantidadDePersonas*/

console.log("Ejercicio 33");

let cantidadDePersonas = 100;

cantidadDePersonas += 5;

console.log(`Cantidad de personas:` + " " + cantidadDePersonas)

cantidadDePersonas -= 3;

console.log(`Cantidad de personas:` + " " + cantidadDePersonas)

cantidadDePersonas *= 2;

console.log(`Cantidad de personas:` + " " + cantidadDePersonas)

