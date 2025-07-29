let nombrePersoanje = prompt("Escribe el nombre del personaje:");

let llamadaApi = new XMLHttpRequest();

llamadaApi.open("GET", "https://rickandmortyapi.com/api/character/?name=" + (nombrePersoanje));

llamadaApi.onload = function () {
  
    let respuestaApi = JSON.parse(llamadaApi.responseText);
    let listaPersonajes = "";

    for (let i = 0; i < respuestaApi["results"].length; i++) {
      let personajeDeLaLista = respuestaApi["results"][i];
      listaPersonajes += personajeDeLaLista["name"] + "\n"
      
      
        
    }

    alert(listaPersonajes)
  
};


llamadaApi.send();


