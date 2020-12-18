// Secondo snack
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array (edited)



// I declare an empthy array and the n variable
var empthyArray = [];
var n;


// ask user 6 times to key in an integer number
// for (var i = 0; i < 6; i++) {
//   n = parseInt(prompt('key in an integer number') );
//   console.log(n);
//
//   // push odd numbers in the array
//   if (n % 2 != 0) {
//     empthyArray.push(n);
//   }
// }
//
// console.log(empthyArray);


// WHILE program version
var i = 0;

while (i <= 5) {
  n = parseInt(prompt('key in an integer number') );
  console.log(n);
  i++;
  if (n % 2 != 0) { // 1%2 0 e resto 1, 2%2 1 e resto 0, 3%2 1 e resto 1, 4%2 2 e resto 0, 5%2 2 e resto 1.
    empthyArray.push(n);
  }
}

console.log(empthyArray);

// ******** The remainder operator (%) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.console.log(12 % 5);
// // // expected output: 2
// //
// // console.log(-12 % 5);
// // // expected output: -2
// //
// // console.log(4 % 2);
// // // expected output: 0
// //
// // console.log(-4 % 2);
// // // expected output: -0
// ************
