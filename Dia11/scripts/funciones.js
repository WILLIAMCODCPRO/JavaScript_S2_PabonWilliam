function sacarCartas(idBaraja){
    let llamarDosCartas = new XMLHttpRequest(idBaraja);

    llamarDosCartas.open("GET", `https://deckofcardsapi.com/api/deck/${idBaraja}/draw/?count=2`);

    llamarDosCartas.onreadystatechange = function () {

    if(llamarDosCartas.readyState === 4 && llamarDosCartas.status === 200) {
        try{

            let lasDosCartas = JSON.parse(llamarDosCartas.responseText);
            let cartaUno = lasDosCartas["cards"][0]["image"];
            let cartaDos = lasDosCartas["cards"][1]["image"];
            document.getElementById("cartaJugador").src = cartaDos;
            document.getElementById("cartaMaquina").src = cartaUno;



        }

        catch(err){
            
            console.log(err.message);
        }
    }

}

   llamarDosCartas.send();
}


export{sacarCartas};