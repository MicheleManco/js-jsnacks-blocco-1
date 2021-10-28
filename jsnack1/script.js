// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// prendo i due numeri che mi da l'utente
let firstNum = parseInt(prompt("inserisci un numero"));
let secondNum = parseInt(prompt("inserisci un numero"));

//confronto i due numeri e metto in console il maggiore
if (firstNum < secondNum) {
    console.log(secondNum)
} else if (firstNum > secondNum) {
    console.log(firstNum);
}else {
    console.log("hai scelto due numeri uguali")
}

