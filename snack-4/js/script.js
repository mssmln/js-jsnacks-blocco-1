// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore


// ask user two numbers in a row
var n1 = parseInt(prompt('key in an integer number') );
var n2 = parseInt(prompt('key in an integer number') );
console.log(n1, n2);

// verify by using a condition which is the greater and print it out
if (n1 > n2) {
  console.log('the greater number is', n1);
} else if (n2 > n1) {
  console.log('the greater number is', n2);
} else {
  console.log('the numbers correspond one another!');
}
