import { sacarCartas} from "./funciones.js";

let idBaraja = "";

let llamarBarajaDeCartas = new XMLHttpRequest();

llamarBarajaDeCartas.open("GET", "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");

llamarBarajaDeCartas.onreadystatechange = function () {

    if(llamarBarajaDeCartas.readyState === 4 && llamarBarajaDeCartas.status === 200) {
        try{

            let barajaDeCartas = JSON.parse(llamarBarajaDeCartas.responseText)
            idBaraja = barajaDeCartas["deck_id"]
            console.log(idBaraja)
        



        }

        catch(err){
            
            console.log(err.message);
        }
    }

}

document.getElementById("botonSacarCartas").addEventListener("click", function () {
  sacarCartas(idBaraja); 
});



llamarBarajaDeCartas.send()

