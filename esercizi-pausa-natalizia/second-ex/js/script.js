// var carta = document.getElementById('carta');
// carta.addEventListener('click', varianteCarta); // imposta la funzione che desideri richiamare
// var forbice = document.getElementById('forbice');
// forbice.addEventListener('click', varianteForbice);
// var sasso = document.getElementById('sasso');
// sasso.addEventListener('click', varianteSasso);

var arrayPc = [];
var arrayUser = [];
// controllo4Punti();

// until
while ((arrayPc.length != 4) || (arrayUser.length != 4)){
  var carta = document.getElementById('carta');
  carta.addEventListener('click', varianteCarta); // imposta la funzione che desideri richiamare
  var forbice = document.getElementById('forbice');
  forbice.addEventListener('click', varianteForbice);
  var sasso = document.getElementById('sasso');
  sasso.addEventListener('click', varianteSasso);
}


// variante l'utente sceglie ad ogni giro e si conclude a chi per primo, pc o utente raggiunge i 4 punti
function varianteCarta() {
  var arrayPc = [];
  var arrayUser = [];

  var n = random(0, 2);


  if (n == 0) {
    console.log('pareggio');

  } else if (n == 1) {
    console.log('vince il pc');
    arrayPc.push('forbice');

  } else {
    console.log('vince utente');
    arrayUser.push('sasso');
  }
  console.log(n);
}


function varianteForbice() {
  var arrayPc = [];
  var arrayUser = [];

  var n = random(0, 2);

  if (n == 0) {
    console.log('vince utente');
  } else if (n == 1) {
    console.log('pareggio');
  } else {
    console.log('vince il pc');
  }
  console.log(n);
}


function varianteSasso() {
  var arrayPc = [];
  var arrayUser = [];

  var n = random(0, 2);

  if (n == 0) {
    console.log('vince il pc');
  } else if (n == 1) {
    console.log('vince utente');
  } else {
    console.log('pareggio');
  }
  console.log(n);
}


// function controllo4Punti() {
//   var arrayPc = [];
//   var arrayUser = [];
//
//   if ((arrayPc.length == 4) || (arrayUser.length == 4)) {
//     console.log('sb totaled 4 scores');
//     return false;
//
//   }
//
// }


// // variante l'utente sceglie una sola volta e si gioca tutte le partite.
// // il ciclo si ferma quando almeno uno dei due array raggiunge una length di 4
// // 0 è carta, 1 è forbice, 2 è sasso
//
// function scelgoCarta() {
//   var arrayPc = [];
//   var arrayUser = [];
//
//   while ((arrayPc.length < 4) && (arrayUser.length < 4)) {
//     var genera = random(0, 2);
//
//     if (genera == 0) {
//       alert('pareggio');
//
//
//     } else if (genera == 1) {
//       alert('round per il pc');
//       arrayPc.push('forbice');
//
//
//     } else {
//       alert('round per user');
//       arrayUser.push('sasso');
//
//     }
//
//   }
//   console.log(arrayPc + ' pc');
//   console.log(arrayUser + ' user');
// }



// genera random entrambi inclusi
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
