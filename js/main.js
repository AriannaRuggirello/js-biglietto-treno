
// Calcolo del prezzo del biglietto del treno
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// var globali
let ticketDiscount, total, basePrice;

// Chiedere quanti km deve percorrere
    let trip = parseInt(prompt("inserisci i km da percorrere"));
    console.log("km to do " + trip);

// chiedere l’età a user
    let userAge = parseInt(prompt("inserisci la tua eta"));
    console.log("user age " + userAge);


// Calcolo km * 0,21€
    let ticketRate = (0.21);
    let ticketCost = trip * ticketRate;
    console.log("train ticket costs " + ticketCost);   

// Se user >18 
    if (userAge < 18) {
        // allora tot.€.biglietto -20%
        ticketDiscount = 20;
       
    } else if (userAge >= 65) {
    // Altrimenti user >65 allora tot.€.biglietto -40%
        ticketDiscount = 40;
    } 
    else {
        ticketDiscount = 0;
    }

    basePrice = ticketCost * ticketDiscount / 100;
    total = ticketCost - basePrice;

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
    console.log(total);
    document.getElementById("my_id").innerHTML = " Sono € :" + " " + total.toFixed(2);;
  