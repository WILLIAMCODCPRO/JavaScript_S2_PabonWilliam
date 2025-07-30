
function buscarPorId (){

  let idPersonaje = document.getElementById("idInput").value;
  let llamadaApi = new XMLHttpRequest();

  

  llamadaApi.open("GET", `https://swapi.py4e.com/api/people/${idPersonaje}/` ); 

  llamadaApi.onreadystatechange = function () {

    

    
    let respuestaApi = JSON.parse(llamadaApi.responseText);
    document.getElementById("name").textContent = `Name: ${respuestaApi["name"]}`;
    document.getElementById("height").textContent = `Height: ${respuestaApi["height"]}`;
    document.getElementById("mass").textContent = `Mass: ${respuestaApi["mass"]}`;
    document.getElementById("hairColor").textContent = `Hair Color: ${respuestaApi["hair_color"]}`;
    document.getElementById("skinColor").textContent = `Skin Color: ${respuestaApi["skin_color"]}`;
    document.getElementById("eyeColor").textContent = `Eye Color: ${respuestaApi["eye_color"]}`;
    document.getElementById("birthYear").textContent = `Birth Year: ${respuestaApi["birth_year"]}`;
    document.getElementById("gender").textContent = `Gender: ${respuestaApi["gender"]}`;
    document.getElementById("homeworld").textContent = `Homeworld: ${respuestaApi["homeworld"]}`;
    document.getElementById("films").textContent = `Films: ${respuestaApi["films"]}`;
    document.getElementById("species").textContent = `Species: ${respuestaApi["species"]}`;
    document.getElementById("vehicles").textContent = `Vehicles: ${respuestaApi["vehicles"]}`;
    document.getElementById("starships").textContent = `Starships: ${respuestaApi["starships"]}`;
    document.getElementById("created").textContent = `Created: ${respuestaApi["created"]}`;
    document.getElementById("edited").textContent = `Edited: ${respuestaApi["edited"]}`;
    document.getElementById("url").textContent = `URL: ${respuestaApi["url"]}`;


  
    

    

  
   }

   llamadaApi.send();
  
}




