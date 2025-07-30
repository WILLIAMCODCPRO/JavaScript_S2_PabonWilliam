function buscarPokemon(){
    let pokemon = document.getElementById("buscar");

    pokemon.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
             let pokemonParaBuscar = pokemon.value
             let llamadaApi = new XMLHttpRequest();
             llamadaApi.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonParaBuscar}/` );
             llamadaApi.onreadystatechange = function (){
                if(llamadaApi.readyState === 4 && llamadaApi.status === 200){
            try{
                let datosPokemon = JSON.parse(llamadaApi.responseText);

                let spritesPokemon = datosPokemon["sprites"]["other"]["showdown"]["front_default"];

               
               document.getElementById("pokemon").src = spritesPokemon;
               

            }
            catch(err){

                console.log(err.message);
            }
        }
             }
             llamadaApi.send();
        }
    }

    )
}

buscarPokemon()