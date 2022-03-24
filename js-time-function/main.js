//sincronicità
var array = [1,2,3,4];

for( let i=0; i< array.length; i++ ){
  console.log(array[i]);
}

document.getElementById('container').innerHTML = "ciao";

//asincrono

setTimeout( function() {
  document.getElementById('container').innerHTML += "<div>Ciao dal primo setTimeout</div>";
}, 2000 ); //2000 millisecondi = 2secondi


document.getElementById('container').innerHTML += "<div>Sono il testo tra i due set timeout</div>";

//Richiamare una funzione custom con il setTimeout
setTimeout( myFunction , 2000 );

function myFunction(){
  document.getElementById('container').innerHTML += "<div>Ciao dal secondo setTimeout</div>";
}



//cronometro
let start = document.getElementById('start');
let stop = document.getElementById('stop');

let clock;

start.addEventListener('click', function() {
  let secondi = 0;

  clock = setInterval( function(){
     document.getElementById('cronometro').innerHTML = `<div>I secondi sono: ${secondi}</div>`;
     secondi++;
  }, 1000 );
})

stop.addEventListener('click', function(){
  clearInterval(clock);
});


setTimeout(()=>{
  document.getElementById('test').innerHTML += `<img src="" alt="">`;
},0);



/*

> @here
Ciao ragazzi,
Esercizio di oggi: **Simon Says**
nome repo: js-simon

**Descrizione:**
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/
