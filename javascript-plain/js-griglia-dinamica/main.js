let grid = document.getElementById('grid');

for( let i = 1; i<=64; i++ ){
  // document.getElementById('grid').innerHTML += `<div id="box${i}" class="box"></div>`;

  let box = document.createElement('div');
  box.innerHTML += getRandomInt(1, 100);
  box.classList.add('box');
  grid.appendChild(box);


  box.addEventListener('click', function(){
    console.log(this);
    // this.classList.add('clicked');
    console.log(this.innerHTML);
    let numero = this.innerHTML;

    if( numero % 2 === 0 ){
      console.log('pari')
      box.classList.add('boxGreen');
    } else {
      console.log('dispari');
      box.classList.add('boxRed');
    }

  });
}

//genera numeri random da min a max
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


/*
Consegna
Generare una griglia di gioco quadrata, simile a quella dello screenshot, in cui ogni cella contiene un numero tra 1 e 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

Bonus
Permettere all'utente di indicare una difficoltà in base alla quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100 //10*10
con difficoltà 2 => tra 1 e 81 //9*9
con difficoltà 3 => tra 1 e 49 //7*7
*/


let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  console.log(document.getElementById('scelte').value);
});
