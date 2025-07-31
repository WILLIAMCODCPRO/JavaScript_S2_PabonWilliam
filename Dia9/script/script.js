let pokemonActual = " "

let llamadaApi = new XMLHttpRequest();
             llamadaApi.open("GET", `https://pokeapi.co/api/v2/pokemon/1/` );
             llamadaApi.onreadystatechange = function (){
                if(llamadaApi.readyState === 4 && llamadaApi.status === 200){
            try{
                let datosPokemon = JSON.parse(llamadaApi.responseText);

                let spritesPokemon = datosPokemon["sprites"]["other"]["showdown"]["front_default"];
                let idPokemon = datosPokemon["id"]
                let namePokemon = datosPokemon["name"]

               
               document.getElementById("pokemon").src = spritesPokemon;
               document.getElementById("numeroNombre").textContent = `${idPokemon} - ${namePokemon}`;

               pokemonActual = datosPokemon["id"]
               

               
               

            }
            catch(err){

                console.log(err.message);
            }
        }
             }
             llamadaApi.send();


             


function buscarPokemon(){
    let pokemon = document.getElementById("buscar");

    pokemon.addEventListener("keyup", function(presionarEnter) {
        if (presionarEnter.key === "Enter") {
             let pokemonParaBuscar = pokemon.value
             let llamadaApi = new XMLHttpRequest();
             llamadaApi.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonParaBuscar}/` );
             llamadaApi.onreadystatechange = function (){
                if(llamadaApi.readyState === 4 && llamadaApi.status === 200){
            try{
                let datosPokemon = JSON.parse(llamadaApi.responseText);

                let spritesPokemon = datosPokemon["sprites"]["other"]["showdown"]["front_default"];
                let idPokemon = datosPokemon["id"]
                let namePokemon = datosPokemon["name"]

               
               document.getElementById("pokemon").src = spritesPokemon;
               document.getElementById("numeroNombre").textContent = `${idPokemon} - ${namePokemon}`;
               

               pokemonActual = datosPokemon["id"]
               

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

function siguientePokemon (){
     let siguiente = pokemonActual + 1;
     let llamadaApi = new XMLHttpRequest();
     llamadaApi.open("GET", `https://pokeapi.co/api/v2/pokemon/${siguiente}/` );
     llamadaApi.onreadystatechange = function (){
                if(llamadaApi.readyState === 4 && llamadaApi.status === 200){
            try{
                let datosPokemon = JSON.parse(llamadaApi.responseText);

                let spritesPokemon = datosPokemon["sprites"]["other"]["showdown"]["front_default"];
                let idPokemon = datosPokemon["id"]
                let namePokemon = datosPokemon["name"]

               
               document.getElementById("pokemon").src = spritesPokemon;
               document.getElementById("numeroNombre").textContent = `${idPokemon} - ${namePokemon}`;

               pokemonActual = datosPokemon["id"]
               

            }
            catch(err){

                console.log(err.message);
            }
        }
             }
     llamadaApi.send();

}



function anteriorPokemon (){
     let anterior = pokemonActual - 1;
     let llamadaApi = new XMLHttpRequest();
     llamadaApi.open("GET", `https://pokeapi.co/api/v2/pokemon/${anterior}/` );
     llamadaApi.onreadystatechange = function (){
                if(llamadaApi.readyState === 4 && llamadaApi.status === 200){
            try{
                let datosPokemon = JSON.parse(llamadaApi.responseText);

                let spritesPokemon = datosPokemon["sprites"]["other"]["showdown"]["front_default"];
                let idPokemon = datosPokemon["id"]
                let namePokemon = datosPokemon["name"]

               
               document.getElementById("pokemon").src = spritesPokemon;
               document.getElementById("numeroNombre").textContent = `${idPokemon} - ${namePokemon}`;

               pokemonActual = datosPokemon["id"]
               

            }
            catch(err){

                console.log(err.message);
            }
        }
             }
     llamadaApi.send();

}

buscarPokemon()
