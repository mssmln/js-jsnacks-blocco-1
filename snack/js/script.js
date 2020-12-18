// Primo snack
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while

// variante con il ciclo for
// var sum = 0;
// var number;
//
// // for (var i = 0; i < 5; i++) {
// //   number = parseInt(prompt('inserisci un numero') );
// //   sum += number;
// // }
// //
// // console.log(sum);

// variante con il ciclo while
var i = 0;
var number;
var sum = 0;


while (i < 5) {
  number = parseInt(prompt('inserisci un numero') );
  sum += number;
  i++;
}

console.log(sum);
// la somma va sempre inizializzata a 0



// non i <= 5 ? no perchè da 0 a 4 or <= 4
