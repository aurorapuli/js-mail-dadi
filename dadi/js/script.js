// creiamo le nostre variabili

let myNumber = document.getElementById ("mynumber");
let pcNumber = document.getElementById ("numberpc");
const sendButton = document.getElementById ("button");

let risultato = document.getElementById ("risultato");


sendButton.addEventListener ("click",
function (){
    // impostiamoalle variabili un numero random
    let userNumber = Math.floor((Math.random() * 10) + 1);
    let computerNumber = Math.floor((Math.random() * 10) + 1);
    
    console.log(userNumber);
    console.log(pcNumber);
    
     if(userNumber > computerNumber){
         risultato.innerHTML = "Bravo! Hai vinto"
     } else if(userNumber < computerNumber){
         risultato.innerHTML = "Hai perso"
     } else{
         risultato.innerHTML = "Pareggio"
     }
     console.log(risultato);

     myNumber.innerHTML = userNumber
     pcNumber.innerHTML = computerNumber

    
}




);