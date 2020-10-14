

//richiesta variabili dati

var km = prompt('quanti kilometri hai intenzione di percorrere?');
var eta = prompt('Quanti anni hai?');

// prezzotratta

var prezzoTratta = km * 0.21;
var prezzo20 = prezzoTratta * 20 /100;
var prezzo40 = prezzoTratta * 40 /100;
//ciclo di selezione con tre opzioni e stampa

if (eta < 18) {
 document.getElementById('prezzo').innerHTML = prezzo20.toFixed(2) + '€  grazie allo sconto inserito del 20% per i minori di 18 anni';
  console.log('Il prezzo è ' + prezzo20.toFixed(2));
} else if (eta > 65) {
  document.getElementById('prezzo').innerHTML = prezzo40.toFixed(2) + '€  grazie allo sconto inserito del 40% per gli over 65';
   console.log('Il prezzo è ' + prezzo40.toFixed(2));
} else {
  document.getElementById('prezzo').innerHTML = prezzoTratta.toFixed(2)+ '€ prezzo intero senza scontistiche';
   console.log('Il prezzo è ' + prezzoTratta.toFixed(2));
}
