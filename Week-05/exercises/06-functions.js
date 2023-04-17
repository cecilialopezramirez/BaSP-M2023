console.log('Excercise 6: Functions');
console.log('Excercise 6.a');

//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la 
//función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola
//del navegador

function addition(num1,num2){
    return num1+num2;
}

var resultExcerciseA=addition(5,10);

console.log(resultExcerciseA);
console.log('Exercise 6.b');

//Copiar la función suma anterior y agregarle una validación para controlar si alguno de los 
//parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los 
//parámetros tiene error y retornar el valor NaN como resultado.

function additionExB(num1,num2){
    if(isNaN(num1)||isNaN(num2)){
        alert('Error: One or both parameters are not a number');
        return NaN;
    }else{
        return num1+num2;
    }  
}

var resultExcerciseB=additionExB(67,45);
console.log(resultExcerciseB);

var resultExcerciseB=additionExB(2,'My name is Cecilia');
console.log(resultExcerciseB);
console.log('Excercise 6.c');

//Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero

function validateInteger(num) {
    if(num % 1===0){
        return true;
    }else{
        return false;
    }
}

var resultExcerciseC=validateInteger(55.5);
console.log(resultExcerciseC);
var resultExcerciseC=validateInteger(2);
console.log(resultExcerciseC);
console.log('Excercise 6.d');

//Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del
// ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un
// alert con el error y retornar el número convertido a entero (redondeado)

function additionExD(num1,num2){
    if(isNaN(num1)||isNaN(num2)){
        alert('Error: One or both parameters are not a number');
        return NaN;
    }else if(validateInteger(num1)===false||validateInteger(num2)==false){
        alert('Error: One or both numbers are not integers');
        console.log(`Rounded numbers are ${Math.round(Math.round(Number(num1)))} and ${Math.round(Number(num2))}`);
    }else{
        return num1+num2;
    } 
}

var resultExcerciseD=additionExD(34,6)
console.log(resultExcerciseD);
var resultExcerciseD=additionExD(34,'Radium Rocket');
console.log(resultExcerciseD);
var resultExcerciseD=additionExD(34,6.64)
console.log(resultExcerciseD);

console.log('Excercise 6.e')

//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una 
//nueva función probando que todo siga funcionando igual que en el apartado anterior

function additionExE(num1,num2){
    return additionExD(num1,num2);
}

var resultExcerciseE=additionExE(10,4)
console.log(resultExcerciseE);
var resultExcerciseE=additionExE(5,'Radium Rocket');
console.log(resultExcerciseE);
var resultExcerciseE=additionExE(34,87.43)
console.log(resultExcerciseE);
