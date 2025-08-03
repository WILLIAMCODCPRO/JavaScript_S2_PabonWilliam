let puntosJugador = 0;
let puntosMaquina = 0;




function sacarCartas(idBaraja){
    let llamarDosCartas = new XMLHttpRequest();

    llamarDosCartas.open("GET", `https://deckofcardsapi.com/api/deck/${idBaraja}/draw/?count=2`);

    llamarDosCartas.onreadystatechange = function () {

    if(llamarDosCartas.readyState === 4 && llamarDosCartas.status === 200) {
        try{

            let lasDosCartas = JSON.parse(llamarDosCartas.responseText);
            let cartaUno = lasDosCartas["cards"][0]["image"];
            let cartaDos = lasDosCartas["cards"][1]["image"];
            document.getElementById("cartaJugador").src = cartaDos;
            document.getElementById("cartaMaquina").src = cartaUno;
            compararCartas(lasDosCartas);
            



        }

        catch(err){
            
            console.log(err.message);
        }
    }

}

   llamarDosCartas.send();
}

function compararCartas(lasDosCartas){


  let valorCartaUno = convertirANumero(lasDosCartas["cards"][0]["value"])
  let valorCartaDos = convertirANumero(lasDosCartas["cards"][1]["value"])

  if(valorCartaUno > valorCartaDos){
    puntosMaquina += 1
    
  }
  else puntosJugador += 1 


  document.getElementById("marcador").textContent = `Tu: ${puntosJugador} | Maquina: ${puntosMaquina}`;
  
  

  

}

function convertirANumero(valorCarta) {
  if (valorCarta === "ACE") return 14;
  else if (valorCarta === "KING") return 13;
  else if (valorCarta === "QUEEN") return 12;
  else if (valorCarta === "JACK") return 11;
  else return parseInt(valorCarta);
 }



export{sacarCartas, compararCartas};