// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


// ask user two words in a row
var word1 = prompt('type down a word');
var word2 = prompt('type down a word once more');
console.log(word1, word2);


// declare which is the lengthest and the shortest and print all out
if (word1.length > word2.length) {
  console.log('the shortest word is', word2);
  console.log('and the lengthest word is', word1);
} else if (word2.length > word1.length) {
  console.log('the shortest word is', word1);
  console.log('and the lengthest word is', word2);
} else {
  console.log('the words length are the same!');
}
