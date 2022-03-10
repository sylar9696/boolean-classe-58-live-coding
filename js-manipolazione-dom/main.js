let element = document.getElementById("saluto");


console.log(element);
element.classList.add("pink");

let test = document.querySelector(".red");
console.log(test);

//confronto fra due numeri: quello più grande, diventa fisicamente più grande (font-size:...)

//definite le variabili
let x = 10;
let y = 20;

// stampare i numeri a video
let viewX = document.getElementById("x");
viewX.innerHTML = x;
let  viewY = document.getElementById("y");
viewY.innerHTML = y;


if( x > y ){
  // aggiungere la classe .bigger a X se è più grande di Y
    //selezionare l'elemento html nel DOM
    viewX.classList.add("bigger");
} else {
  //aggiungere la classe .bigger se Y è più grosso di X
    viewY.classList.add("bigger");
}

//Aggiungere contenuto a un testo preesistente
let testo = document.getElementById("testoEsistente").innerHTML += `ciao asdfgdsgfsdgsdg`;
//Seleziono l'elemento nel DOM
let selezionareTesto = document.getElementById("testoEsistente");
selezionareTesto.append(`Testo numero 2`);
selezionareTesto.prepend(`Testo scritto prima`);


//al click sul bottone compare un testo
//selezionare l'elemento del DOM
let bottone = document.getElementById("bottoneShowHide");
let nota = document.getElementById("notaSelect");

//creare l'evento al click
bottone.addEventListener("click",

  //istruzioni che succedono dopo il click sull'elemento
  function() {
      // nota.classList.add("d-none");
      // if( nota.classList.contains("d-none") ){
      //   nota.classList.remove("d-none");
      // } else {
      //   nota.classList.add("d-none");
      // }
      nota.classList.toggle("d-none");
  }
);

/*
Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito
*/

let nomeUtente = prompt("dammi il tuo nome!");
console.log(nomeUtente);

let sesso = prompt("di che sesso sei ? (M = maschio F = femmina )");
console.log(sesso);

let nomeScritto = document.getElementById("nome");

document.getElementById("saluto2").innerHTML = `ciao <span id="nome">${nomeUtente}</span>`;

// controllare se maschio o femmina
if( sesso == "m" ){
  //aggiungere il colore blu al nome stampato nel dom nella frase ciao + nome
  let nomeScritto = document.getElementById("nome");
  nomeScritto.classList.add("maschio");
} else {
  let nomeScritto = document.getElementById("nome");
  nomeScritto.classList.add("femmina");
}



//ottenere un dato da un input text
let valoreInput = document.getElementById("inputnome");

let bottone2 = document.getElementById("buttone2");

bottone2.addEventListener("click",
  function(){
    console.log(valoreInput.value);
  }
);
