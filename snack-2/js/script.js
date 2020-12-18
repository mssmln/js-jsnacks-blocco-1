// Secondo snack
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array (edited)


var empthyArray = [];
var number;

// for (var i = 0; i <= 5; i++) {
//   number = parseInt(prompt('inserisci un numero') );
//   if (number % 2 != 0) { // 1 % 2 fa 0 con resto 1, 3 % 2 f a 1 resto 1 5  % 2 fa 2 resto 1 (divisioni)
//     empthyArray.push(number);
//   }
// }

// console.log(empthyArray);
// // The remainder operator (%) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.console.log(12 % 5);
// // expected output: 2
//
// console.log(-12 % 5);
// // expected output: -2
//
// console.log(4 % 2);
// // expected output: 0
//
// console.log(-4 % 2);
// // expected output: -0

var i = 0;


while (i <= 5) {
  number = parseInt(prompt('inserisci un numero') );
  i++;
  if (number % 2 != 0) {
    empthyArray.push(number);
  }
}

console.log(empthyArray);
