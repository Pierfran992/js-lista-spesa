// Lista della spesa con ciclo while
/*Consegna:
Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).
Ricordiamoci:
- di inizializzare la variabile di contatore prima dell’inizio del ciclo while
- di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while
di partire sempre semplici prima con i log e poi passiamo all’output in pagina
sta mano po esse fero e po esse piuma
Bonus;
l’utente può inserire al volo elementi alla lista.*/

// creo l'array contenente la lista della spesa
const groceryShopping = ["pane","acqua", "farina", "pasta", "uova", "latte"];
console.log(groceryShopping);

// creo la cosntante per richiamare ul presente nell'html in cui inserire gli elementi li contenente gli elementi della spesa
let ulListElement = document.querySelector("ul.grocery_shopping");

let itemLists = ``;

// creo il ciclo for per stampare nel dom gli elementi dell'array
/*for (let i = 0; i < groceryShopping.length; i++) {
    itemLists += `
    <li> ${groceryShopping[i]} </li>`;
}*/

// creo il ciclo while per stampare nel DOM gli elementi dell'array
let i = 0;
while (i < groceryShopping.length) {
    itemLists += `
    <li> ${groceryShopping[i]} </li>`;
    console.log(itemLists);
    i++;
}

// stampo gli elementi dell'array nel DOM
ulListElement.innerHTML += itemLists;

