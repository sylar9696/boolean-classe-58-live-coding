let numero1 = 10;
let numero2 = "10";

// 10 > 20 = false
if ( numero1 > numero2 ) {
  //istruzioni se condizione è vera
  console.log('numero1 è maggiore di numero2');
} else if ( numero1 == numero2) {
  //istruzioni se condizione 2 è vera
  console.log('i numeri sono uguali');
} else {
  //istruzioni nessuna condizione precedente è vera
  console.log("i numeri sono diversi");
}


if ( "ciao" == "pere" ) {
  console.log("test vero")
}

// questi due testi sono uguali ?

let parola1 = "banana";
let parola2 = "Banana";

if ( parola1 == parola2 ) {
  console.log("si sono uguali")
} else {
  console.log("sono diversi")
}

let x = 2;

if ( x != 2 ) {
  console.log("sono diversi i due numeri");
} else {
  console.log("sono uguali");
}

// doppia condizione
let y = 2;

//true && false
if ( y != 3 || y > 2 ) {
  console.log("true");
} else {
  console.log("false");
}

//true && false
if ( (y != 3) || (y > 2) ) {
  console.log("true");
} else {
  console.log("false");
}


//Utente loggato
let utenteLoggato = false;

if (utenteLoggato) {
  console.log("true utente loggato");
} else {
  console.log("false utente non loggato");
}

// l'utente è vero che non è loggato e quindi è false? (true)
if ( !utenteLoggato ) {
  console.log("true utente loggato");
} else {
  console.log("false utente non loggato");
}

// lavorare con le date

const d = new Date();
console.log(d);

let giornoSettimana = d.getDay();
console.log( giornoSettimana ); //ris. 3


if ( giornoSettimana == 3 ) {
  console.log("mercoledì")
} else if ( giornoSettimana == 0 ) {
  console.log("domenica")
}//.......fino a completare la settimana

/*
0 = sunday = domenica
1= monday = lunedì
.....
3 = wednesday
*/

// Lo switch
//giornoSettimana = 3
switch (giornoSettimana) {
  case 0:
    console.log("domenica");
    break;
  case 1:
    console.log("lunedi");
    break;
  case 2:
    console.log("martedi");
    break;
  case 3:
    console.log("mercoledi");
    break;
  case 4:
    console.log("giovedi");
    break;
  case 5:
    console.log("venerdi");
    break;
  case 6:
    console.log("sabato");
    break;
}

// test switch con operatori relazionali

let z = 10;

switch (z) {
  case 10:
    console.log("caso che vogliamo");

    z=8;
    console.log(z);
    var variabileScope = "test Scope Switch";

    break;
  case 1:
    console.log("caso 1");
    break;
  case 2:
    console.log("caso 2");
    break;
}

console.log(variabileScope);


// Come realizzare numeri random
let numeroRandom = Math.random();
console.log(numeroRandom);

// arrotondiamo un numero per difetto
let numeroVirgola = 2.3;
console.log( numeroVirgola ); //2.3
numeroVirgola = Math.floor( numeroVirgola );
console.log( numeroVirgola ); //2

// arrotondiamo un numero per eccesso
let numeroVirgola2 = 2.3;
console.log( numeroVirgola2 ); //2.3
numeroVirgola2 = Math.ceil( numeroVirgola2 );
console.log( numeroVirgola2 ); //3

//realizzare numeri random per il lancio di un dado
// 1) numero random compreso di default tra 0 e 0.9999999999
let numeroRadomDado = Math.random();
console.log(numeroRadomDado);
// 2) arrotondare il numero randomico e arriviamo al numero sul dado a 6 facce
numeroRadomDado = Math.floor( (numeroRadomDado * 6) + 1); //dall'1 al 6
console.log(numeroRadomDado);

//Calcolare la lunghezza di una stringa (length parte da 1)
let lunghezzaParola = "banane e pere";
console.log( `la parola è lunga:  ${lunghezzaParola.length}` );

document.getElementById("nomeID").innerHTML = lunghezzaParola.length;
let nuovaVar = lunghezzaParola.length;


/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
  1) prompt per chiedere i chilometri da percorrere in (numero) esempio: 10
  2) prompt per chiedere l'età del passeggero in (numero)
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
  3) Calcolare i km richiesti per 0.21
va applicato uno sconto del 20% per i minorenni
  4) condizione if per sapere se è minorenne e applicare nel caso true 20% di sconto
va applicato uno sconto del 40% per gli over 65.
  5) condizione if per sapere se è over 65 e applicare nel caso true 40% di sconto
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
  6) i risultati dovranno avere max 2 decimali (formula da cercare)

*/
