// consumo de Api
// mediante XMLHttpRequest

function buscarPersonaje(){
    //const nombre = promt ("Ingresar el nombre del personaje a buscar:");
    const xhr = new XMLHttpRequest();//La importacia del XML
    let nombreUsar = "Mee";
    const url = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr === 200){
            try{
                const datitos = JSON.parse(xhr.responseText);
                console.log(datitos["results"][0]["name"]);

            }
            catch(err){

                console.log(err.message);
            }
        }

    }
    xhr.send();
}

buscarPersonaje();