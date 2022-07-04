/* #1 - all
Este fragmento de código devuelve verdadero si la función devuelve verdadero para todos los elementos de una colección y falso en caso contrario.
Puedes omitir el segundo argumento fn si quieres para utilizar Boolean como valor predeterminado. */

const all = (arr, fn = Boolean) => arr.every(fn);

console.log(all([4, 2, 3], x => x > 1)); // true
console.log(all([1, , 3])); // true


/* #2 - all
Este snippet comprueba si todos los elementos 
de la matriz son iguales. */


const allEqual = arr => arr.every(val => val === arr[0]);

allEqual ([1, 2, 3, 4, 5, 6]); // false
allEqual ([1, 1, 1, 1]); // true

/* #3 - arrayToCSV
Este snippet convierte los elementos que no tienen comas 
ni comillas dobles en cadenas con valores separados
por comas. */

const arrayToCSV = (arr, delimiter = ' , ') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a' , 'b'], ['c' , 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a' , 'b'], ['c' , 'd']], ' ; '); // '"a";"b"\n"c";"d"'
