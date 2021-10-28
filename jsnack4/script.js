// in un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e 
// comunicagli se può partecipare o no alla festa.

// creazione della lista di invitati tramite array 
//chiedo all'utente il suo nome 
//attraverso tutto l'array e vedo se il suo nome è presente 
//se è presente gli comunico che è in lista
//se non è presente gli comunico che non può entrare alla festa

let listaGatsby = ["gionni","gionna","gionno","gionnu","gionne","gio","gion" ]
let nomeUtente = prompt("inserisci il tuo nome così vedo se è in lista")
let trovato = false
for (let i = 0; i < listaGatsby.length; i++) {
    if (nomeUtente == listaGatsby[i]){
        trovato = true
    }
}

if (trovato == true){
    console.log("se in lista entra")
}else{
    console.log("mi dispiace ma non sei in lista")
}