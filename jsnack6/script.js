// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

//devo generare un array vuoto che dovro popolare con un ciclo
//devo generare 50 numeri => un ciclo che mi ritorni 50 numeri casuali
//questi 50 numeri devo confrontarli con tutti i numeri dento l'array quindi devo attraversare tutto l'array quindi for
    //creo una variabile che mi permetta di mettere oppure no i numeri dentro l'array 
    // se  array[i] == il numero generato, la variabile cambia e mi salta il push 
    //di conseguenza se la variabile non cambia pusho 


let arrayNum = []

while (arrayNum.length < 10){
    let doppio = false;
    let numbers = Math.floor(Math.random()*10 +1);
    for(let i = 0; i < arrayNum.length; i++){
        if(arrayNum[i] == numbers){
            doppio = true;
        }
    }
    if (doppio == false){
        arrayNum.push(numbers)
    }
}
    console.log(arrayNum)