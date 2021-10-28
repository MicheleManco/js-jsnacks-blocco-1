// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

// genero un array 
// genero 50 numeri random senza doppioni
    //faccio un for contenente 50 numeri generati random
    //li pusho solo se non c'è ne gia uno dentro di uguale 
        //per trovare se c'è ne uno uguale prendo tutti i numeri che entrano nel array e li confronto
    //non devono esserci presenti dentro l'array numeri uguali

let arrayNum = []

for(let i = 0; i < 10; i++){
    let nums = Math.floor(Math.random()*10+1)
    if(nums != arrayNum){
        arrayNum.push(nums)
    }else {
        i--
    }
}
console.log(arrayNum);

//dopo che ho generato il numero random devo far attraversare a quel numero random tutto l'array che contiene gli altri numeri
