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


// 8.  Crea una función que devuelva la suma de todos los elementos en una lista.

let listaDeNumeros2 =[]; //hardcodeados[10,20,30,40,50,60,70,80,90];
let sumaArray = 0;

function sumarArray(){
    //con un for para cargar un Array de 10 posiciones con números generados Random
    for (let i = 0; i < 10; i++) {
        let numeroRandom = Math.floor(Math.random()*10)+1;
        console.log(numeroRandom);
        listaDeNumeros2.push(numeroRandom);
        sumaArray = sumaArray + listaDeNumeros2[i];
    }
    return sumaArray;
};

//llamada a la f(x)
let resultado2 = sumarArray();
console.log(listaDeNumeros2);
console.log(resultado2);



//9.  Crea una función que devuelva la posición en la lista donde se encuentra
// un elemento pasado como parámetro, o -1 si no existe en la lista.

let listaDeNumeros9 =[]; 
let numeroBuscado = Math.floor(Math.random()*10)+1;
console.log(`El numeroBuscado es: ${numeroBuscado}`);
//funcion carga un Array de 10 posiciones con numeros random de 1 a 1
//y devuelve la lista cargada
function cargaElementos(){
        for (let i = 0; i < 10; i++) {
            let numeroRandomAAgregar = Math.floor(Math.random()*10)+1;
            console.log(numeroRandomAAgregar);
            listaDeNumeros9.push(numeroRandomAAgregar);
        }
        return listaDeNumeros9;
}
//funcion de busqueda, recibe un array de 10 numeros y busca el "numero buscado
//devolviendo su posicion en caso afirmativo o (-1) en caso n- 
function buscarElemento(numeroBuscado, listaDeNumeros9){
    //for para buscar el elemento y si lo encuentra devolver la primera posicion donde está
    //uso break por si está más de una vez
    for (let i = 0; i < listaDeNumeros9.length; i++) {
        if(listaDeNumeros9[i] == numeroBuscado){
            return i;  //devuelve el indice del elemento encontrado
            //no necesito poner breack porque el return corta el ciclo
        }
    }
    return -1;  //en caso que no encuentre el elemento
};
//llamada a la f(x)
cargaElementos();
console.log(listaDeNumeros9);
////le sumo 1 porque la función devuelve el índice y me pide la posición
let posicion = buscarElemento(numeroBuscado, listaDeNumeros9) + 1; 


//10. Crea una función que reciba dos listas de números del mismo tamaño y
// devuelva una nueva lista con la suma de los elementos uno a uno.

let lista1 = [];
let lista2 = [];
let listaSuma1y2 = [];
//for carga las 2 listas simultaneamente  
//las 2 primeras con 6 elementos random entre 1 y 4 
function cargaListas(){
    for(let i = 0; i < 6; i++){
        lista1[i] = Math.floor(Math.random()*4)+1;
        lista2[i] = Math.floor(Math.random()*4)+1;
    }
    return;
};
function sumarListas1y2(lista1, lista2){
    for(let i = 0; i < 6; i++){
        listaSuma1y2[i] = lista1[i] + lista2[i];
    }
    return listaSuma1y2;
}
//llamados
cargaListas();
sumarListas1y2(lista1, lista2);
console.log(lista1);
console.log(lista2);
console.log(listaSuma1y2);



//11. Crea una función que reciba una lista de números y
// devuelva una nueva lista con el cuadrado de cada número. 

let listaOriginal = [];
let listaElevada = [];

function generarLista(){
    for(let i = 0; i < 6; i++){
        listaOriginal[i] = Math.floor(Math.random()*10)+1;
    }
    return listaOriginal;
}
function elevar(listaOriginal){

    for(let i = 0; i<6; i++){
        listaElevada[i] = listaOriginal[i] * listaOriginal[i]; 
    }

    return listaElevada;   
}
//llamados a las f(x)
generarLista();
elevar(listaOriginal);
console.log(listaOriginal);
console.log(listaElevada);

