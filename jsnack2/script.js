// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

//chiedo all'utente due parole 
let firstWord = prompt("scegli una parola")
let secondWord = prompt("scegli una parola")

// trovo la parola piu lunga e quella piu corta 
if (firstWord.length > secondWord.length){
    console.log(firstWord, secondWord);
}else if (firstWord.length < secondWord.length){
    console.log(secondWord, firstWord);
}else {
    console.log("le parole sono lunghe uguali");
}