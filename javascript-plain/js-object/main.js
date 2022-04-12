let car = {
  'nome': 'ford fiesta',
  'brand': 'ford',
  'colore': [ 'bianca', 'nera' ]
}

console.log( car );
//dot notation
console.log( car.brand );

//parentesi quadre per selezione di una chiave e ottenimento del suo valore
console.log( car['brand'] );

//cercare di stampare una chiave su richiesta da prompt
let richiesta = prompt('inserisci la chiave che vogliamo ottenere e il suo valore');

console.log( car[richiesta] );
//non si puo usare in abbinamento a variabili esterne
console.log( car.richiesta );


//per aggiungere nuove info dentro un oggetto
car.tipoCambio = 'automatico';
//per aggiungere nuove info dentro un oggetto come array
car.tipoCambio = [ 'automatico', 'manuale' ];
car.nomeNuovaChiave = 3;
console.log(car)

console.log(window.devicePixelRatio);

//inserire un nuovo valore dentro l'array dentro un oggetto
car.colore.push('green');

console.log(car);

for ( let key in car ){
  //Otteniamo tutti i "valori" delle chiavi
  //console.log(car[key]);
  //Otteniamo le chiavi
  //console.log(key);

  //Variante mono informazione
  console.log( `${key} => ${car[key]}` );

  document.getElementById('info-car').innerHTML +=
  `
    <div class="key">${key}</div>
    :
    <div class="keyValue">${car[key]}</div>
  `;
}


//array bidimensionali
let classi = [
  {
    'nomeClasse': 'classe-1',
    'numeroStudenti': 30
  },
  {
    'nomeClasse': 'classe-2',
    'numeroStudenti': 40
  }
]

//ottenere i dati di un array di oggetti
  //come si ottengono i dati di un array ?
  //ciclo for, nomeArray[0]....

  console.log( classi[0]['numeroStudenti'] );

  //stampare tutti i valori di un array bidimensionale

  let k = 0;

  for (let i= 0; i < classi.length; i++){
    console.log( `sono dentro il for: ${classi[i]}` );
    for( let key in classi[i] ){
      console.log( `${key} => ${classi[i][key]}` );
    }
  }

  //Se volessimo stampare un nuovo oggetto dentro un array di oggetti

  let nuovoOggetto = {
    'nomeClasse': prompt('inserisci nome della classe'),
    'numeroStudenti': prompt('inserisci numero di studenti della classe')
  }

  classi.push( nuovoOggetto );

  console.log( classi )



  /*

  Per la pagina 'Chi siamo' del nostro sito aziendale, dobbiamo sviluppare la sezione "Il nostro team".


Definiamo un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

Milestone 1: stampare in console l'elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.

Milestone 2: stampare i dati all'interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento che conterrà i suoi dati.

BONUS: stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.

*/
