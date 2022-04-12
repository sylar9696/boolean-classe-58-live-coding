/*
Consegna
Generare una griglia di gioco quadrata, simile a quella dello screenshot, in cui ogni cella contiene un numero tra 1 e 100.(numeri casuali e non ripetuti).
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

Bonus
Permettere all'utente di indicare una difficoltà in base alla quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

/*

Parte 2:

Consegna

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Il computer deve generare 16 numeri casuali nel range dei numeri della griglia: le bombe.

I numeri nella lista delle bombe non possono essere duplicati.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
3- l'utente indica un livello di difficoltà in base al quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Le bombe dovranno essere generate nello stesso range delle caselle di gioco.


*/

//selezionare elementi DOM
//selezioniamo il bottone di inizio
let start = document.getElementById('btn');
//Selezioniamo select difficolta
let select = document.getElementById('difficolta');

//Selezione griglia
let grid = document.getElementById('grid');
//Creazione del box interno alla griglia
let box = document.createElement('div');

//Selezionare <p></p> nella griglia
let paragrafo = document.getElementById('welcome');

//Array di numeri casuali da 1 a 100
// let array = [];
let array2 = [];

//array per le bombe
let arrayBombe = [];

//array 16 bombe
let sediciBombe = [];

//Al click del bottone vogliamo, cambiare la griglia in base alla difficoltà selezionata e iniziare a giocare
start.addEventListener('click', function () {

  //Reset del contenuto interno della griglia per nuova partita
  grid.innerHTML = '';

  //Aggiungo la classe "griglia" all'elemento grid
  grid.classList.add('griglia');
  //Rimuovo la classe "none" dall'elemento grid
  grid.classList.remove('none');
  //Aggiungo la classe "none" al <p></p>
  paragrafo.classList.add('none');

  let numeroCelle;

  if (select.value == "facile") {
    numeroCelle = 100;
  } else if (select.value == "media") {
    numeroCelle = 81;
  } else {
    numeroCelle = 49;
  }

  for (y = 1; y < numeroCelle + 1; y++) {
    array2.push(y);
  }

  function shuffle(array2) {
    return array2.sort(() => Math.random() - 0.5);
  }

  array2 = shuffle(array2);
  console.log(array2);

  //Generare le bombe in base alla difficoltà e al numero di celle
  //le bombe saranno sempre 16:
  for (k = 0; k < numeroCelle; k++) {
    arrayBombe.push(k);
  }

  console.log(`le bombe sono: ${ arrayBombe }`);
  arrayBombe = shuffle(arrayBombe);
  console.log(`le bombe sono: ${ arrayBombe }`);

  for (bombe = 0; bombe < 16; bombe++) {
    sediciBombe.push(arrayBombe[bombe]);
  }

  console.log(`le bombe sediciBombe sono: ${ sediciBombe }`);





  for (let i = 0; i < numeroCelle; i++) {

    let grid = document.getElementById('grid');

    let box = document.createElement('div');

    grid.appendChild(box);

    if (numeroCelle == 100) {
      box.classList.add('box-10');
    } else if (numeroCelle == 81) {
      box.classList.add('box-9');
    } else {
      box.classList.add('box-7');
    }

    box.innerHTML = `<span>${array2[i]}</span>`;

    // box.addEventListener('click', function () {
    //   console.log(this.innerText);

    //   if ( sediciBombe.includes( parseInt(this.innerText) ) ){
    //     this.classList.add('bomba');
    //   } else {
    //     this.classList.add('clicked');
    //   }
    // });

    box.addEventListener( 'click', clickBox );
  }






  /*
    //Reset del contenuto interno della griglia per nuova partita
    grid.innerHTML = '';

    //Aggiungo la classe "griglia" all'elemento grid
    grid.classList.add('griglia');
    //Rimuovo la classe "none" dall'elemento grid
    grid.classList.remove('none');
    //Aggiungo la classe "none" al <p></p>
    paragrafo.classList.add('none');

    //BONUS: Condizione legata alla difficoltà scelta
      //catturare il valore della select
        //Test: otteniamo la difficoltà come valore
    console.log(select.value);
      //creare la condizione in base alla scelta
    if ( select.value == "facile" ) {

      //griglia da 100 => 10x10
      for( let i = 0; i < 100; i++ ){
        //Selezione griglia
        let grid = document.getElementById('grid');
        //Creazione del box interno alla griglia
        let box = document.createElement('div');
        //Inserire 100 box all'interno della griglia
        grid.appendChild(box);
        //Aggiungere classe al singolo box
        box.classList.add('box-10');
        //Inserire numero dentro il box
        box.innerHTML = `<span>${array[i]}</span>`;

        //Al click del box cambia colore la cella e diventa blu
        box.addEventListener('click', function(){
          this.classList.add('clicked');
        });
      }

    } else if (select.value == "media") {
      //griglia da 81 => 9x9
      for( let i = 0; i < 81; i++ ){
        //Selezione griglia
        let grid = document.getElementById('grid');
        //Creazione del box interno alla griglia
        let box = document.createElement('div');
        //Inserire 100 box all'interno della griglia
        grid.appendChild(box);
        //Aggiungere classe al singolo box
        box.classList.add('box-9');
        //Inserire numero dentro il box
        box.innerHTML = `<span>${array[i]}</span>`;

        //Al click del box cambia colore la cella e diventa blu
        box.addEventListener('click', function(){
          this.classList.add('clicked');
        });
      }

    } else {
      //griglia da 49 => 7x7
      for( let i = 0; i < 49; i++ ){
        //Selezione griglia
        let grid = document.getElementById('grid');
        //Creazione del box interno alla griglia
        let box = document.createElement('div');
        //Inserire 100 box all'interno della griglia
        grid.appendChild(box);
        //Aggiungere classe al singolo box
        box.classList.add('box-7');
        //Inserire numero dentro il box
        box.innerHTML = `<span>${array[i]}</span>`;

        //Al click del box cambia colore la cella e diventa blu
        box.addEventListener('click', function(){
          this.classList.add('clicked');
        });
      }

    }
    */
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function clickBox() {
  console.log(this.innerText);

  if (sediciBombe.includes(parseInt(this.innerText))) {
    this.classList.add('bomba');
    this.removeEventListener("click", clickBox);

  } else {
    this.classList.add('clicked');
  }

  let n = 0;
  console.log(n = n++);
}





// for( y = 1; y <= 100; y++ ){
//   let numeroRandom = getRandomIntInclusive(1, 100);

//   do{
//       array.push(numeroRandom)
//   }while( !array.includes(numeroRandom) )
// }





// console.log(array);
// console.log( shuffle(array2) );
