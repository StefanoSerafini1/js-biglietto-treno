

//richiesta variabili dati

var km = prompt('quanti kilometri hai intenzione di percorrere?');
var eta = prompt('Quanti anni hai?');

// prezzotratta

var prezzoTratta = km * 0.21;

//ciclo di selezione con tre opzioni

if (eta < 18) {
  console.log (prezzoTratta - (prezzoTratta * 20 / 100));
} else if (eta > 65) {
  console.log(prezzoTratta - (prezzoTratta * 40 / 100));
} else {
  console.log (prezzoTratta);
}

//stampa ris

document.getElementById("prezzo").innerHTML = prezzoTratta;
