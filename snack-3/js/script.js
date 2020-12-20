// terzo snack
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.



// I declare an array containing guest names to attend the party
var guest = ['Rossi', 'Bianchi', 'Verdi', 'Conte'];
var name = prompt('key in your name');
name = name.charAt(0).toUpperCase() + name.slice(1);
var message = false; // senza la var booleana il ciclo scorrerebbe ciascun index per risponderti, e.i. con Bianchi - i0 false i1 true i2 false i3 false. Così non funziona
// ci aspettiamo un solo true, meglio inizializzare message a false

for (var i = 0; i < guest.length; i++) {
  if (name == guest[i]) {
    message = true;
  }
}

console.log(message);

if (message == true) {
  console.log('you can attend the party');
} else {
  console.log('you cannot attend the party');
}
