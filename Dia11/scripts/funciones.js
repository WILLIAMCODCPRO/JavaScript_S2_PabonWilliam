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

            let boton = document.getElementById("botonSacarCartas");
            boton.disabled = true;

            setTimeout(function(){
               document.getElementById("cartaJugador").src = cartaDos;
            }, 1000)
            
            setTimeout(function(){
               document.getElementById("cartaMaquina").src = cartaUno;
            },2000)
            
             setTimeout(function(){
               compararCartas(lasDosCartas);
               boton.disabled = false;
            },3000)

             
            
            
            



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
   else if(valorCartaUno < valorCartaDos){
     puntosJugador += 1
   }

   else {
     // Nadie gana puntos
   }


   
  

  document.getElementById("marcador").textContent = `Tu: ${puntosJugador} puntos | Maquina: ${puntosMaquina} puntos`;

  if(lasDosCartas["remaining"] === 0){
    if(puntosJugador < puntosMaquina){
      setTimeout(function(){
       alert(`La máquina gana: Tu: ${puntosJugador} puntos | Maquina: ${puntosMaquina} puntos`);
       alert("Felicidades te gano una maquina, te falta odio")
       location.reload();
      }, 4000);
    }

    else if(puntosJugador > puntosMaquina){
      setTimeout(function(){
       alert(`El jugador gana: Tu: ${puntosJugador} puntos | Maquina: ${puntosMaquina} puntos`);
       alert("Felicidades le ganaste a la maquina, el premio es la satisfaccion de ganarle a una maquina")
       location.reload();
      }, 4000);
    }

    else if(puntosJugador === puntosMaquina){
      setTimeout(function(){
       alert(`Es un empate: Tu: ${puntosJugador} puntos | Maquina: ${puntosMaquina} puntos`);
       location.reload();
      }, 4000);
    }
  }
  

  

}

function convertirANumero(valorCarta) {
  if (valorCarta === "ACE") return 14;
  else if (valorCarta === "KING") return 13;
  else if (valorCarta === "QUEEN") return 12;
  else if (valorCarta === "JACK") return 11;
  else return parseInt(valorCarta);
 }



export{sacarCartas};