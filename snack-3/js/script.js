// terzo snack
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.



// I declare an array containing guest names to attend the party
var guest = ['Rossi', 'Bianchi', 'Verdi', 'Conte'];
var name = prompt('key in your name');
var message = true;

for (var i = 0; i < guest.length; i++) {
  if (name != guest[i]) {
    message = false;

  }
}

console.log(message);



// var listaInvitati = ['Rossi', 'Verdi', 'Bianchi'];
//
// var nome = prompt('inserisci il nome');
//
// for (var i = 0; i < listaInvitati.length; i++) {
//   if (nome == listaInvitati[i]) {
//     console.log('puoi accedere alla festa');
//   } //else {
//   //   console.log('non puoi accedere');
//   // }  vede index per index i 0 vero i 1 falso and so on
// }
//
//
// // correzione
// // il prompt fuori dal ciclo
// // i sta per la lista che cambia 0,1,2 and so on
// // var messaggio = false; // consideriamo i nome come codici univoci e con inizializzato il false il programma lavora meno perch+ troveremo un solo true
// //
// // for (var i = 0; i < listaInvitati.length; i++) {
// //   if (nome == listaInvitati[i]) {
// //     messaggio = true;
// //   }
// // }
// // console.log(messaggio);
// //
// //
// // if (messaggio) {
// //   console.log('you can');
// // } else {
// //   console.log('you cannot');
// // }
