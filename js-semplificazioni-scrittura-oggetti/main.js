// let name = 'marco'
// let anni = 30

// // let studente = {
// //   name: name,
// //   anni: anni
// // }

// let studente = {
//   name,
//   anni
// }

// console.log(studente);


//Dinamicizzare le chiavi e i valori delle chiavi di un oggetto

let diametro = 30;
let circonferenza = 50;
let nomeSfera = prompt('scrivi il tuo nome della sfera');

let nome = 'nomeSfera'

let sfera = {
  diametro: diametro,
  circonferenza: circonferenza,
  [nome]: nomeSfera
}

console.log(sfera);

//prima della destrutturizzazione di un oggetto
const diametroSfera = sfera.diametro;
console.log(diametroSfera)

let car = {
  cambio: 'automatico',
  brand: 'Ford',
  name: 'ford fiesta'
}

//con destrutturizzazione
let { cambio, brand } = car;

console.log( cambio )

//spread

function myFunction( messaggio, ...spread ){
  console.log( spread );
  let somma = 0;
  for( i=0; i < spread.length; i++ ){
    somma += spread[i]
  }

  return messaggio + somma;
}

console.log(myFunction( 'la somma dei numeri è: ', 2, 878, 95, 41, 78, 41, 65 ))

console.log( myFunction( 'la somma dei numeri è: ', 2, 878, 95, 41, 78, 41, 65 ) )


//spread in oggetti
const oggetto1 = {
  type: 'palla',
  peso: 50,
  colore: 'green'
}

const oggetto2 = {
  type: 'stella',
  peso: 20,
  diametro: 200
}

const copyOggetto = { ...oggetto1, ...oggetto2}

const copyOggetto2 = { ...oggetto2, ...oggetto1}

console.log(copyOggetto2)


//destrutturizzazione + spread su array
let array = [ 1,2,3,4,5,7,8 ];

[ firstElement, secondElement, ...spread ] = array

console.log( firstElement ) //1
console.log( secondElement ) //2
console.log( ...spread ) //3,4,5,7,8

let array2 = ['ciao', 'world'];

// let [primaParola, secondaParola] = array2

// console.log( primaParola )

[array2[0], array2[1]] = [array2[1], array2[0]]

console.log(array2)
