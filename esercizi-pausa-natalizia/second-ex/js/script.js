var carta = document.getElementById('carta');
carta.addEventListener('click', varianteCarta);
var forbice = document.getElementById('forbice');
forbice.addEventListener('click', varianteForbice);
var sasso = document.getElementById('sasso');
sasso.addEventListener('click', varianteSasso);


var arrayPc = [];
var arrayUser = [];



function varianteCarta() {
  var n = random(0, 2);

  if (n == 0) {
    console.log('pareggio');
  } else if (n == 1) {
    console.log('vince il pc');
    arrayPc.push('forbice');
    if (arrayPc.length == 4) {
      alert('pc totaled 4 scores!');
    }
  } else {
    console.log('vince utente');
    arrayUser.push('sasso');
    if (arrayUser.length == 4) {
      alert('user totaled 4 scores!');
    }
  }
  console.log('numero generato: ' + n);
  console.log('length array pc: ' + arrayPc.length);
  console.log('length array user: ' + arrayUser.length);
}


function varianteForbice() {
  var n = random(0, 2);

  if (n == 0) {
    console.log('vince utente');
    arrayUser.push('forbice');
  } else if (n == 1) {
    console.log('pareggio');
  } else {
    console.log('vince il pc');
    arrayPc.push('sasso');
  }
  console.log('numero generato: ' + n);
  console.log('length array pc: ' + arrayPc.length);
  console.log('length array user: ' + arrayUser.length);
}


function varianteSasso() {
  var n = random(0, 2);

  if (n == 0) {
    console.log('vince il pc');
    arrayPc.push('carta');
  } else if (n == 1) {
    console.log('vince utente');
    arrayUser.push('sasso');
  } else {
    console.log('pareggio');
  }
  console.log('numero generato: ' + n);
  console.log('length array pc: ' + arrayPc.length);
  console.log('length array user: ' + arrayUser.length);
}


// genera random entrambi inclusi
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
