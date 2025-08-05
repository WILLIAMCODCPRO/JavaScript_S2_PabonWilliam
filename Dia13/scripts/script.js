let token = "872fb6dc7f6e3e2a9ee0dcb4980ccd9b"


function buscarHeroe(){
    let nombreHeroe = document.getElementById("nombre")
    nombreHeroe.addEventListener("keyup",function(presionarEnter){
        if (presionarEnter.key === "Enter"){
            let heroeParaBuscar = nombreHeroe.value
            let llamadaHeroe = new XMLHttpRequest
            llamadaHeroe.open("GET", `https://superheroapi.com/api/${token}/search/${heroeParaBuscar}`)
            llamadaHeroe.onreadystatechange = function(){
                if(llamadaHeroe.readyState === 4 && llamadaHeroe.status === 200){
                    let datosHeroes = JSON.parse(llamadaHeroe.responseText)
                    let nombreDelHeroe = datosHeroes["results"]["name"]
                    document.getElementById("id").src = nombreDelHeroe
                
                }
        }
            
        }
    llamadaHeroe.se
    })
    
}

