// variante l'utente sceglie una sola volta e si gioca tutte le partite.
// il ciclo si ferma quando almeno uno dei due array raggiunge una length di 4
// 0 è carta, 1 è forbice, 2 è sasso


var carta = document.getElementById('carta');
carta.addEventListener('click', scelgoCarta);
var forbice = document.getElementById('forbice');
forbice.addEventListener('click', scelgoForbice);
var sasso = document.getElementById('sasso');
sasso.addEventListener('click', scelgoSasso);


function scelgoCarta() {
  var arrayPc = [];
  var arrayUser = [];

  while ((arrayPc.length <= 3) && (arrayUser.length <= 3)) {
    var genera = random(0, 2);

    if (genera == 0) {
      alert('pareggio');
    } else if (genera == 1) {
      alert('round per il pc');
      arrayPc.push('forbice');
    } else {
      alert('round per user');
      arrayUser.push('sasso');
    }
  }
  console.log(arrayPc + ' pc');
  console.log(arrayUser + ' user');
}


function scelgoForbice() {
  var arrayPc = [];
  var arrayUser = [];

  while ((arrayPc.length <= 3) && (arrayUser.length <= 3)) {
    var genera = random(0, 2);

    if (genera == 0) {
      alert('round per user');
      arrayUser.push('forbice');
    } else if (genera == 1) {
      alert('pareggio');
    } else {
      alert('round per il pc');
      arrayPc.push('sasso');
    }
  }
  console.log(arrayPc + ' pc');
  console.log(arrayUser + ' user');
}


function scelgoSasso() {
  var arrayPc = [];
  var arrayUser = [];

  while ((arrayPc.length <= 3) && (arrayUser.length <= 3)) {
    var genera = random(0, 2);

    if (genera == 0) {
      alert('round per il pc');
      arrayPc.push('carta');
    } else if (genera == 1) {
      alert('round per user');
      arrayUser.push('sasso');
    } else {
      alert('pareggio');
    }
  }
  console.log(arrayPc + ' pc');
  console.log(arrayUser + ' user');
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
