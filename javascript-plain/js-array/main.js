let array = [ "marco", "giuseppe" ];

array.push("bob");

console.log(array);

let nome = "hello world!";
console.log(nome.length);

console.log(array.length);

console.log(array[0]);

//utilizzare il prompt per ottenere un dato di un array
let frutta = [ "pere", "banane", "mele" ];
//posizionamento degli elementi va da 0 a infinito
//il length di un array = la sua lunghezza => va da 1 a infinito

let posizioneDato = parseInt(prompt("posizione del frutto numero da 0 a 2"));

if ( posizioneDato >= 0 && posizioneDato <= ( frutta.length - 1 ) ) {
  console.log( frutta[posizioneDato] );
} else {
  console.log("inserisci un numero tra 0 e 2");
}

// for( i=0; i < frutta.length; i++ ){
//   document.getElementById("container").innerHTML += `<div>${frutta[i]}</div>`;
// }

//come stampare al contrario
for ( i = (frutta.length - 1); i>=0; i--  ){
  document.getElementById("container").innerHTML += `<div>${frutta[i]}</div>`;
}

//Creare un array tramite prompt

let arrayTest = [];

for (i=1; i <= 3; i++){
  let frutta = prompt("dimmi il nome di un frutto");
  arrayTest.push( frutta );
}

console.log(arrayTest)

//calcolare la media dei numeri di un array

let numeri = [2, 5, 7, 4];
let somma = 0;
let divisore = numeri.length;

//come si calcola la media ? si somma tutti i numeri e si dividono dopo per la loro quantità => 2+5+7+4= 18 quantità => 4 (numeri.length)

//Calcoliamo la somma dei numeri dell'array
for ( i=0; i < numeri.length; i++ ){
  somma = somma + numeri[i];
}

console.log(somma); //18
let media = somma / divisore;
console.log(`la media è: ${media}`);

//controllare se un utente è registrato al sito oppure no

let iscritti = [ "marco", "giuseppe" ];
let dammiNome = prompt("dammi il tuo nome");

for( i=0; i < iscritti.length; i++ ){

  if ( iscritti[i] == dammiNome ){
    console.log("il tuo nome è nella lista!");
  } else if(iscritti[i] != dammiNome){
    console.log("vatti a registrare!");
  }

}

//Con includes
// if( iscritti.includes(dammiNome) ){
//   console.log("è iscritto")
// } else {
//   console.log("l'utente non è iscritto")
// }



//NOme repo di oggi: js-mail-dadi

// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// la coda dell' array
// Creare un array con un numero a piacere di elementi.
// Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell'array.
// Attenzione #1: quanti elementi minimo dovrà contenere l'array?
// Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.
// Extra Bonus
// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
// Attenzione #3: quali controlli dobbiamo fare sull'input dell'utente?
// Super Extra Bonus: chiedere all'utente anche quanti elementi vanno estratti dal fondo dell'array.
