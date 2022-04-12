const array = [ 'nome1', 'nome2', 'nome3' ];

for( let i=0; i < array.length; i++ ){
  console.log( i ); //ottenere l'indice degli elementi dell'array
  console.log( array[i] ); // ottenere gli elementi di un array
}

array.forEach(
  //scriviamo l'arrow function
  // ( element, index, array ) => {
  //   console.log( index );
  // }

  //scriviamo una funzione anonima
  function( elm, i, array ){
    console.log( elm, i );
  }

)

const gattiCernobil = [
  {
    nome: 'cat1',
    colore: 'red'
  },
  {
    nome: 'cat2',
    colore: 'green'
  },
  {
    nome: 'cat3',
    colore: 'blue'
  }
];

for( let i= 0; i < gattiCernobil.length; i++ ){
  const element = gattiCernobil[i];
  console.log( element.nome, element.colore );
}

//con il foreach
gattiCernobil.forEach(
  ( element ) => console.log( element.nome, element.colore )

  // function( element, i) {
  //   const { nome, colore } = element;
  // }
);


//map
let numeri = [ 2,45,12,15,20 ];
// let quadrati = [];

// for( let i=0; i < numeri.length; i++ ){
//   let numero = numeri[i] * numeri[i];
//   console.log( numero );
//   quadrati.push( numero );

// }
// console.log( quadrati );
const quadrati = numeri.map(
  // ( element ) => {
  //   return element * element;
  // }

  //versione breve
  ( element ) => element * element
);

console.log( quadrati );


//filter
let numeri2 = [ 3,45,17,15,20, 30, 8, 10 ];

const pari = numeri2.filter(
  // (element) => {
  //   if( element % 2 == 0 ){
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  //abbreviazione
  ( element ) => element % 2 == 0
);

console.log( pari )

//controllare se la parola inizia con la lettera R

let arrayNomi = [ 'Romolo', 'Marco', 'Romanaccio' ];

// console.log( arrayNomi[0][0] );

const nomiFiltrati = arrayNomi.filter(
  // ( element ) => {
  //   console.log( element[0] );
  //   if ( element[0] == 'R' ){
  //     return true
  //   }
  //   return false;
  // }

  //Abbreviata
  ( element ) => element[0] == 'R'

)

console.log( nomiFiltrati );


//jsnack 1 es6 versione foreach

//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [{
    name: 'Pinarello',
    peso: 10
  },
  {
    name: 'Bianchi',
    peso: 8
  },
  {
    name: 'Scott',
    peso: 11
  }
];

let primoOggetto = bici[0];

bici.forEach(
  (element) => {
    console.log( element );
    console.log( element.peso );
    if( primoOggetto.peso > element.peso ) {
      primoOggetto = element;
    }
  }
);

console.log(primoOggetto);

//Definire un array di oggetti
//ogni oggetto rappresenta un gatto
//che è caratterizzato da: nome, età, colore, sesso
const gatti = [
  {
    'nome': 'Ciccio',
    'eta': 5,
    'colore': 'green',
    'sesso': 'm'
  },
  {
    'nome': 'mark',
    'eta': 2,
    'colore': 'gray',
    'sesso': 'm'
  },
  {
    'nome': 'pippo',
    'eta': 12,
    'colore': 'black',
    'sesso': 'm'
  },
  {
    'nome': 'pinky',
    'eta': 10,
    'colore': 'pink',
    'sesso': 'f'
  }
];

//TRamite la funzione foreach stampare in pagina tutti i gattini ciascuno con il proprio "colore" e il proprio "nome"

gatti.forEach(
  ( element ) => {
    console.log( element );
    //destrutturizzazione
    const { nome, colore } = element;

    console.log( nome, colore );

    //stampare i gattini
    document.getElementById('gatti').innerHTML +=
    `
    <p>
    <i class="fa-solid fa-cat" style="color:${colore}"></i>
    ${nome}
    </p>
    `
  }
)

//MIlestone 2
//Dividere i gatti in due array in base al sesso

// const maschi = gatti.filter(
//   ( element ) => {
//     //condizione
//     if( element.sesso == 'm' ){
//       return true
//     }
//     return false
//   }
// );

const maschi = gatti.filter( ( element ) => element.sesso == 'm' )

console.log( maschi );

// const femmine = gatti.filter(
//   ( element ) => {
//     //condizione
//     if( element.sesso == 'f' ){
//       return true
//     }
//     return false
//   }
// );

const femmine = gatti.filter( ( element ) => element.sesso == 'f' )

console.log( femmine );

// Il Grande Gatsby ci ha chiesto di creare i segnaposti per il tavolo
// degli invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo
// e la lista degli invitati in ordine di posto.
// ma la tipografia per stampare il tutto vuole che le mandiamo una lista
// di ospiti in cui ogni ospite sia un oggetto javascript.

const tableName = 'Tavolo Vip';
const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin',
];

//filter quando lo usiamo? crea un nuovo array con all'interno gli elementi che convalidano la condizione

//map: Quando lo usiamo? crea un array, non c'è una condizione, il numero di elementi all'interno è uguale a quello di partenza con nuovi dati all'interno o magari modificati
const tavolo = guests.map(
  ( element, index ) => {
    //tavolo dobbiamo pushare un oggetto con dentro chiavi: tableName, nome (degli invitati), numeroDelTavolo x invitato
    /*
      {
        nome: 'Brad Pitt'
        nomeTavolo: 'Tavolo Vip',
        numeroPostoTavolo: 1
      }
    */
   console.log(element);
    return (
      {
        nome: element,
        nomeTavolo: tableName,
        numeroPostoTavolo: index
      }
    )
  }
);

console.log( tavolo );

// Abbiamo un elenco di età, trovare i minorenni e gli over 65
const ages = [25, 18, 56, 14, 17, 72, 38, 84, 13, 45, 65, 8, 60];

const over = ages.filter( ( element ) => ( element >= 65 ) );
const under = ages.filter( ( element ) => ( element < 18 ) );

console.log( over );
console.log( under );


/*
Snack 3
Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

min = 2
max = 5

nuovo array = [ 3,4 ]

e dati due numeri min e max (min più piccolo di max).

Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.

Eseguiamo questo esercizio prima con forEach e poi con filter.


Snack 4
Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
1- Dobbiamo creare delle targhe con il loro nome in maiuscolo.
  1.1 Ci serve quindi un nuovo array di stringhe.
    ciclo map: nuovo array con lo stesso numero di elementi di partenza
  1.2 Ogni elemento del nuovo array sarà il nome dello studente
    nuovoArray = [ 'Marco', 'Paola'.... ]
  1.3 ma con tutte le lettere maiuscole.
    nuovoArray = [ 'MARCO', 'PAOLA'.... ]

2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
  ciclo filter
3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
  ciclo filter, con condizione &&
*/
