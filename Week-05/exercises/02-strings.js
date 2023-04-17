console.log('Excercise 2:Strings');
console.log('Excercise 2.a');

//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
// texto en mayúscula (utilizar toUpperCase).

var stringExcA='Taylor Swift is a great songwriter';

console.log(stringExcA.toUpperCase());
console.log('Excercise 2.b');

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
//string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var stringExB='Its going to rain tomorrow';
var exBResult=stringExB.substring(0,4);

console.log(exBResult);
console.log('Excercise 2.c');

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los últimos 3 caracteres guardando el resultado en una nueva variable
// (utilizar substring).

var stringExC='The weather is unpredictable';
var stringExCSubstr= stringExC.substring(stringExC.length-3,stringExC.length);

console.log(stringExCSubstr);
console.log('Excercise 2.d');

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una 
//nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

var stringExD='Cornelia Street';
var stringExDSubstr=stringExD.substring(0,1).toUpperCase()+stringExD.substring(1,stringExD.length).toLowerCase();

console.log(stringExDSubstr);
console.log('Excercise 2.e');

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var stringExE='My reputation precedes me';
var excEResult=stringExE.indexOf(' ');

console.log(excEResult);
console.log('Excercise 2.f');

//Crear una variable de tipo string con al menos 2 palabras largas
// (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores 
//para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás 
//letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var stringExF='Untouchable superstar';
var exFResult=stringExF.substring(0,1).toUpperCase()+stringExF.substring(1,stringExF.indexOf(' ')).toLowerCase()+
stringExF.substring(stringExF.indexOf(' '),stringExF.indexOf(' ')+1)+stringExF.substring(stringExF.indexOf
(' ')+1,stringExF.indexOf(' ')+2).toUpperCase()+stringExF.substring(stringExF.indexOf('uperstar')).toLowerCase();

console.log(exFResult);
