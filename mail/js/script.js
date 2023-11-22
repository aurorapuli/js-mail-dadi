// creare lista di chi può accedere

const partecipanti = ["aurora@gmail.com", "paolo@gmail.com", "alberto@gmail.com", "giulia@gmail.com"];

// creiamo le nostre variabili

const inputEmail = document.getElementById ("email");
const sendButton = document.getElementById ("button");

const benvenuto = document.getElementById ("welcome");

console.log(partecipanti);

sendButton.addEventListener("click",

  function (){

   /*  if(inputEmail.value == partecipanti [0]){
         benvenuto.innerHTML = "Benvenuto nel gruppo"
         console.log(inputEmail.value);
          console.log(partecipanti);
  
    } else if (inputEmail.value == partecipanti [1]){
        benvenuto.innerHTML = "Benvenuto nel gruppo"
           console.log(inputEmail.value);
         console.log(partecipanti);


     } else if(inputEmail.value == partecipanti [2]){
        benvenuto.innerHTML = "Benvenuto nel gruppo"
           console.log(inputEmail.value);
         console.log(partecipanti);
    
         

     } else if(inputEmail.value == partecipanti [3]){
        benvenuto.innerHTML = "Benvenuto nel gruppo"
           console.log(inputEmail.value);
         console.log(partecipanti);
    
         

     } else {

        benvenuto.innerHTML = "Non fai parte del gruppo"
     }

*/

        let risultato ;


        for ( let i = 0; i <= partecipanti.length - 1; i++ ){
            


            let singoloPartecipante = partecipanti [i];
            // console.log(singoloPartecipante);
           

             if(singoloPartecipante == inputEmail.value){
                risultato = true
                console.log("trovata");
                benvenuto.innerHTML = "Benvenuto nel nostro gruppo";
             }
            
        }

        if (!risultato){
            benvenuto.innerHTML = "Non puoi entrare nel nostro gruppo"
            console.log("non trovata");
        }

    }

);