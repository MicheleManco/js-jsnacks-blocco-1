// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// creo un array vuoto
//chiedo sei volte 
    //guardo se sono dispari
    //se sono dispari li aggiungo all'array
    
let numeriDis = [];

for (let i = 0; i < 6 ; i++) {
    let numUtente = parseInt(prompt("inserisci i tuoi sei numeri"));
    if (numUtente % 2){
        numeriDis.push(numUtente)
    }
}

console.log(numeriDis);