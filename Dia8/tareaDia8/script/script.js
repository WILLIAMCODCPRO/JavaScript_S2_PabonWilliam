

let llamadaApi = new XMLHttpRequest();

llamadaApi.open("GET", "https://swapi.py4e.com/api/people/1/" );

llamadaApi.onload = function () {
  
    let respuestaApi = JSON.parse(llamadaApi.responseText);
    let listaPersonajes = "";

    for (let i = 0; i < respuestaApi[i].length; i++) {
      
      listaPersonajes += personajeDeLaLista["name"] + "\n"
        
      
        
    }

    alert(listaPersonajes)
  
};


llamadaApi.send();