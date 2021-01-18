// Primo snack
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while


// I declare the variables
var n;
var sum = 0 // needed to be initialized in some way



// ask user to key in 5 times an integer number
// for (var i = 0; i < 5; i++) {
//   n = parseInt(prompt('key in an integer number') );
//   sum += n;
//   //console.log(sum); // it means to sum by the cycle
// }
//
// console.log(sum);


// WHILE program version
var i = 0;

while (i <= 4) { // from 0 to 4 total 5 times
  n = parseInt(prompt('key in an integer number') );
  sum += n;
  i++; // in questa operazione non sommiamo alcuna i pertanto la sua posizione (sopra o sotto sum += non conta. Gli alert possono bloccare i cicli e mostrarti ciò che sta accadendo

  // alert(sum);
  // sum = n + i;
  // alert(sum);
}

console.log(sum);
