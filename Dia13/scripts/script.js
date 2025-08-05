let token = "872fb6dc7f6e3e2a9ee0dcb4980ccd9b"

function buscarHeroe(){
    let nombreHeroe = document.getElementById("inputNombreHeroe").value;
    let listaDeheroes = new XMLHttpRequest;
    listaDeheroes.open("GET", `https://superheroapi.com/api.php/${token}/search/${nombreHeroe}`);
    listaDeheroes.onreadystatechange = function(){
        if(listaDeheroes.readyState === 4 && listaDeheroes.status === 200){
            try{
                datosHeroe = JSON.parse(listaDeheroes.responseText);
                for(let i = 0; i < datosHeroe["results"].length; i++){
                    let name = datosHeroe["results"][i]["name"]
                    let image = datosHeroe["results"][i]["image"]["url"]
                    let tarjetasPersonajes = document.createRange().createContextualFragment(`
                       <div class="tarjetaSola">
                        <div>
                        <img src="${image}" alt="${name}">
                        </div>
                        <h2>${name}</h2>
                       </div>
                        
                        `)
                    document.getElementById("tarjetaPersonaje").append(tarjetasPersonajes)
                    
                }

            }

            catch(err){

                console.log(err.message);
            }
        }
    }
       
    
    listaDeheroes.send();
}

