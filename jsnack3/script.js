// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// chiedo dieci volte all'utente di mettere dei numeri
    // creo un array per contenere tutti i numeri che mi inserirà l'utente
    // inserisco dentro l'array tutti i dieci dati che mi genera l'utente

let arrayUser = [];
let somma = 0
while (arrayUser.length < 10 ){
   let numero =  parseInt(prompt("inserisci un numero"));
   arrayUser.push(numero)
   console.log(numero);
    somma += numero;
}
console.log(somma)
console.log(arrayUser);


