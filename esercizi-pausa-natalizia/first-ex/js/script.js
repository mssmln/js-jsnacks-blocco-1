// livello facile
var easiest = document.getElementById('easiest');
easiest.addEventListener('click', livelloFacile);

// livello normale
var normal = document.getElementById('normal');
normal.addEventListener('click', livelloNormale);

// livello difficile
var hardest = document.getElementById('hardest');
hardest.addEventListener('click', livelloDifficile);




// da 1 a 100
function livelloFacile() {

  // dichiaro le variabili
  var arrayNumeri = [];
  var tentativi = 4;
  var userNumber;
  var sentinella = true;
  var i = 0;


  while (i = tentativi && sentinella) {

    // richiamo la funzione per generare un numero e lo pusho
    var random = generaRandom(1, 100);
    arrayNumeri.push(random);
    console.log(arrayNumeri);

    // chiedo all'utente un numero e sottraggo i tentativi
    userNumber = parseInt(prompt('prova ad indovinare il numero tra 1 e 100') );
    console.log(userNumber);
    tentativi--;
    console.log(tentativi);

    // fermo il ciclo se indovina
    if (userNumber == random) {
      alert('you won');
      sentinella = false;

      // suggerisce se è più grande o più piccolo
    } else if (userNumber < random) {
      alert('try with a greater number');
      alert(tentativi + ' left');

    } else if (userNumber > random) {
      alert('try with a smaller number');
      alert(tentativi + ' left');

    } else {
      alert('you lost');
    }

    i++;

  }

}


// da 1 a 50
function livelloNormale() {

  // dichiaro le variabili
  var arrayNumeri = [];
  var tentativi = 4;
  var userNumber;
  var sentinella = true;
  var i = 0;


  while (i = tentativi && sentinella) {

    // richiamo la funzione per generare un numero e lo pusho
    var random = generaRandom(1, 50);
    arrayNumeri.push(random);
    console.log(arrayNumeri);

    // chiedo all'utente un numero e sottraggo i tentativi
    userNumber = parseInt(prompt('prova ad indovinare il numero tra 1 e 100') );
    console.log(userNumber);
    tentativi--;
    console.log(tentativi);

    // fermo il ciclo se indovina
    if (userNumber == random) {
      alert('you won');
      sentinella = false;

      // suggerisce se è più grande o più piccolo
    } else if (userNumber < random) {
      alert('try with a greater number');
      alert(tentativi + ' left');

    } else if (userNumber > random) {
      alert('try with a smaller number');
      alert(tentativi + ' left');

    } else {
      alert('you lost');
    }

    i++;

  }

}


// da 1 a 10
function livelloDifficile() {

  // dichiaro le variabili
  var arrayNumeri = [];
  var tentativi = 4;
  var userNumber;
  var sentinella = true;
  var i = 0;


  while (i = tentativi && sentinella) {

    // richiamo la funzione per generare un numero e lo pusho
    var random = generaRandom(1, 10);
    arrayNumeri.push(random);
    console.log(arrayNumeri);

    // chiedo all'utente un numero e sottraggo i tentativi
    userNumber = parseInt(prompt('prova ad indovinare il numero tra 1 e 100') );
    console.log(userNumber);
    tentativi--;
    console.log(tentativi);

    // fermo il ciclo se indovina
    if (userNumber == random) {
      alert('you won');
      sentinella = false;

      // suggerisce se è più grande o più piccolo
    } else if (userNumber < random) {
      alert('try with a greater number');
      alert(tentativi + ' left');

    } else if (userNumber > random) {
      alert('try with a smaller number');
      alert(tentativi + ' left');

    } else {
      alert('you lost');
    }

    i++;

  }

}


function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}
