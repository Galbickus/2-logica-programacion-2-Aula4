/*Saber cómo usar las funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de desafíos (no obligatorios) centrados en la práctica para mejorar aún más tu experiencia de aprendizaje. ¡Vamos a practicar entonces!

Desafíos
1.  Crea una lista vacía llamada "listaGenerica".
2.  Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3.  Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
4.  Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
5.  Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
6.  Crea una función que calcule el promedio de los elementos en una lista de números.
7.  Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8.  Crea una función que devuelva la suma de todos los elementos en una lista.
9.  Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número. */

//1.  Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

console.log(listaGenerica);

//2.  Crea una lista de lenguajes de programación llamada
// "lenguagesDeProgramacion con los siguientes 
//elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(lenguagesDeProgramacion);

//3.  Agrega a la lista "lenguagesDeProgramacion los siguientes
// elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push("Java");
console.log(lenguagesDeProgramacion);

lenguagesDeProgramacion.push("Ruby");
console.log(lenguagesDeProgramacion);

lenguagesDeProgramacion.push("GoLang");
console.log(lenguagesDeProgramacion);

//4.  Crea una función que muestre en la consola todos los
// elementos de la lista "lenguagesDeProgramacion.

function muestraArray(){

    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
    }
};

//llamada a la f(x)
muestraArray();

//5.  Crea una función que muestre en la consola todos los elementos de la lista
// "lenguagesDeProgramacion en orden inverso.

function muestraArrayAlReves(){

    for (let i = lenguagesDeProgramacion.length-1; i>=0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
};

//llamada a la f(x)
muestraArrayAlReves();

//6.  Crea una función que calcule el promedio de los elementos en una lista de números.

let listaDeNumeros = [1,2,3,4,5,6,7,8,9];
let suma = 0;

function promediar(){
    for (let i = 0; i < listaDeNumeros.length; i++) {
        suma = suma + listaDeNumeros[i];
    }
    let promedio = suma/listaDeNumeros.length;
    return promedio;
};

//llamada a la f(x)
let resultado = promediar();
console.log(resultado);

//7.  Crea una función que muestre en la consola el número más grande
// y el número más pequeño en una lista.

// Declaración de la función llamada encontrarMayorMenor que toma un parámetro llamado lista
function encontrarMayorMenor(lista) {
    // Inicialización de las variables mayor y menor con el primer elemento de la lista
    let mayor = lista[0];
    let menor = lista[0];
  
    // Bucle que comienza en el segundo elemento de la lista (índice 1)
    for (let i = 1; i < lista.length; i++) {
        // Comprueba si el elemento actual es mayor que el valor almacenado en la variable mayor
        if (lista[i] > mayor) {
            // Si es así, actualiza la variable mayor con el valor actual del elemento
            mayor = lista[i];
        }
        // Comprueba si el elemento actual es menor que el valor almacenado en la variable menor
        if (lista[i] < menor) {
            // Si es así, actualiza la variable menor con el valor actual del elemento
            menor = lista[i];
        }
    }
  
    // Imprime en la consola el valor almacenado en la variable mayor
    console.log('Mayor:', mayor);
    // Imprime en la consola el valor almacenado en la variable menor
    console.log('Menor:', menor);
}

// Declaración de un array llamado numeros con algunos valores
let numeros = [15, 8, 25, 5, 12];

// Llamada a la función encontrarMayorMenor pasando el array numeros como argumento
encontrarMayorMenor(numeros);
