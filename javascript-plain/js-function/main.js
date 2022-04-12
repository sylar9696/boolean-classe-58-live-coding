// funzione di somma o concatenazione in alert
// function sommaNumeriAlert( num1, num2 ){
//   alert( num1 + num2 );
// }

// //invocare una funzione con numeri fissi
// sommaNumeriAlert(8, 4);

// let num1 = paseInt(prompt("inserisci numero"));
// let num2 = paseInt(prompt("inserisci numero"));

// //invocare una funzione secondo i prompt
// sommaNumeriAlert(num1, num2);

//invocare una funzione
// sommaNumeriAlert("ciao", "mondo");

let num1 = parseInt(prompt("inserisci numero"));
let num2 = parseInt(prompt("inserisci numero"));

function sommaNumeri( num1, num2 ){
  let somma = num1 + num2;

  console.log(somma);

  return somma;
}

document.getElementById("container").innerHTML = sommaNumeri( num1, num2 );


// console.log(2);
// console.log("somma");

// console.log( sommaNumeri( num1, num2 ) );

// console.log(variabile);
// console.log(costante);






//non usabile perchè è in block scope
// console.log( somma );


// console.log( sommaNumeri( num1, num2 ) ); //somma => 8




// Palidroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. //vinco se esce somma (pari / dispari ) //io:3 //pc: 4 //somma: 7(dispari)
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
