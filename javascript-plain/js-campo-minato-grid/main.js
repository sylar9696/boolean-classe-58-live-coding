let grid = document.getElementById("grid");
console.log(grid);
let levels = document.getElementById("levels");

let startBtn = document.getElementById("startBtn");

let cellNumbers = 0;

startBtn.addEventListener('click', function () {
  console.log(levels.value);
  if (levels.value == 'Easy') {
    cellNumbers = 100;
    document.documentElement.style.setProperty('--column-number', '10');
  } else if (levels.value == 'Medium') {
    cellNumbers = 81;
    document.documentElement.style.setProperty('--column-number', '9');
  } else {
    cellNumbers = 49;
    document.documentElement.style.setProperty('--column-number', '7');
  }
  console.log(cellNumbers);


  for (i = 1; i <= cellNumbers; i++) {
    //finchè la condizione del for è true
    // grid.innerHTML += `<div class="box">${ getRandomInt(1, 100) }</div>`

    const boxDiv = document.createElement('div');
    //Aggiungere una classe al div
    boxDiv.classList.add('box');
    // boxDiv.style.width = 'calc(100%/var(--column-number-easy))';
    //Aggiungere numeri random
    boxDiv.innerHTML = getRandomInt(1, 100);
    //Appendere l'elemento dentro il div grid
    grid.appendChild(boxDiv);

    boxDiv.addEventListener('click', function () {
      //Ottenere elemento cliccato
      console.log(this);

      //aggiungere una classe all'elemento cliccato
      this.classList.add('clicked');

      //Ottenere valore interno numerico
      console.log(this.innerHTML);
    });
  }


});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


// for( i = 1; i <= 64; i++ ){
//   //finchè la condizione del for è true
//   // grid.innerHTML += `<div class="box">${ getRandomInt(1, 100) }</div>`

//   const boxDiv = document.createElement('div');
//   //Aggiungere una classe al div
//   boxDiv.classList.add('box');
//   //Aggiungere numeri random
//   boxDiv.innerHTML = getRandomInt(1, 100);
//   //Appendere l'elemento dentro il div grid
//   grid.appendChild(boxDiv);

//   boxDiv.addEventListener('click', function(){
//     //Ottenere elemento cliccato
//     console.log(this);

//     //aggiungere una classe all'elemento cliccato
//     this.classList.add('clicked');

//     //Ottenere valore interno numerico
//     console.log(this.innerHTML);
//   });
// }
