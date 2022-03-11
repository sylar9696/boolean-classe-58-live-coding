//realizziamo un ciclo che stampi i numeri fino a 10

for (let i = 1; i <= 10; i = i * 3){
  console.log( i );

  if( i == 3){
    console.log( `${i} "=> pippo"` )
  }
}

//Stampare "divisibile per 2 a lato del numero"

for (let i = 0; i <= 100; i++){
  console.log( i );
  //capire quando un numero è divisibile per 2
  if( i % 2 == 0  ){
    console.log(`il numero ${i} è pari`)
  }
}

//array
let nomi = [ "marco", "alex", "vincenzo" ];

console.log(nomi[1]);
console.log(nomi.length);

for( i=0; i < nomi.length; i++ ){
  console.log(nomi[i]);
  document.getElementById("containerDati").innerHTML += `<li>${ nomi[i] }</li>`;
}
