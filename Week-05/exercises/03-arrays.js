console.log('Excercise 3:Arrays');
console.log('Excercise 3.a');

//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
// "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
// consola los meses 5 y 11 (utilizar console.log).

var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(array[4]);
console.log(array[10]);
console.log('Excercise 3.b');

//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)

console.log(array.sort());
console.log('Excercise 3.c');

//Agregar un elemento al principio y al final del array (utilizar unshift y push)

array.unshift('Months:');
array.push('Year');

console.log(array);
console.log('Excercise 3.d');

//Quitar un elemento del principio y del final del array (utilizar shift y pop)

array.shift();
array.pop();

console.log(array);
console.log('Excercise 3.e');

//Invertir el orden del array (utilizar reverse)

array.reverse();

console.log(array);
console.log('Excercise 3.f');

//Unir todos los elementos del array en un único string donde cada mes este separado por
// un guión - (utilizar join)

var stringExcerciseF= array.join(' - ');

console.log(stringExcerciseF);
console.log('Excercise 3.g');

//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)

var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var excerciseGResult= array.slice(4,11);

console.log(excerciseGResult);