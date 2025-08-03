let puntosJugador = "";
let puntosMaquina = "";

let llamarCartas = new XMLHttpRequest();

llamarCartas.open("GET", "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");

llamarCartas.onreadystatechange = function () {

    if(llamarCartas.readyState === 4 && llamarCartas.status === 200) {
        try{

            let barajaDeCartas = JSON.parse(llamarCartas.responseText)
            console.log(barajaDeCartas)



        }

        catch(err){
            
            console.log(err.message);
        }
    }

}

llamarCartas.send()