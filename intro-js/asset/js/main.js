// const, var, let
const nome = "alessandro";
// nome = "marco";

// console.log(nome);

let eta = 25;
console.log( "l'età di " + nome + " è "  + eta);
console.log( 'l\'età' );

console.log( ` l'eta di ${nome} è: ${eta} ` );

eta = 26;
console.log("età modificata: " + eta);



// il nome del mio animale preferito quando avevo 5 anni, il nome del mio animale preferito quando ho 18 anni
let nomeAnimale = "canguro";
eta = 5;


console.log( `${nomeAnimale} quando avevo ${eta} anni` );

let frase = `${nomeAnimale} quando avevo ${eta} anno`;

console.log(frase);

nomeAnimale = "rinoceronte";
eta = 18;

console.log( `${nomeAnimale} quando avevo ${eta} anni` );

console.log( nomeAnimale );

let numero1 = 10;
let numero2 = 2;
let numero3 = numero1 + numero2;

console.log( typeof(numero3));

//capire l'anno di età del diciottenne
  //capire l'anno attuale (2022)
  //l'età del diciottenne (18)

let annoAttuale = 2022;

document.getElementById("contenitore_target").innerHTML = annoAttuale - eta;

// chiedi al bambino qual'è il suo animale preferito
  //COme faccio a chiedere qualcosa al bambino?


const nomeAnimale2 = prompt("bambino, che animale preferisci ?");
console.log(nomeAnimale2);
document.getElementById("contenitore_target2").innerHTML = nomeAnimale2;

//Bambino, Quanti anni ha il pesce ?
let etaPesce = prompt("Bambino, Quanti anni ha il pesce ?");
etaPesce = parseInt(etaPesce);
console.log( typeof(etaPesce) );
