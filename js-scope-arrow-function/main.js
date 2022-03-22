// let i = 0;

// for( i; i <= 10; i++  ){
//   console.log(i);
// }

// if( i === 10 ){
//   console.log(i); //error
// }

function  sommaNormale( a, b ){
  return a+b;
}

console.log( `La funzione normale restituisce: ${ sommaNormale(5, 10) }` );

//arrow function
const sommaArrow = (a, b) => {
  return a+b;
}

console.log( `La funzione arrow restituisce: ${ sommaArrow(5, 20) }` );

//Arrow function inline
const sommaArrow2 = (a, b) => a+b;
console.log( `La funzione arrow2 restituisce: ${ sommaArrow2(5, 30) }` );




// document.getElementById('btn').addEventListener('click', function(){
//   console.log(this);
//   //console.log( document.getElementById('btn') )
// });

document.getElementById('btn').addEventListener('click', () => console.log(this));
