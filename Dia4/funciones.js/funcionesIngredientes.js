function anadirIngrediente(ingredientes, nombreIngrediente, descripcionIngrediente, precioIngrediente, stockIngrediente){

    let nuevoIngrediente =  {
        "nombre": nombreIngrediente,
        "descripcion": descripcionIngrediente,
        "precio": precioIngrediente,
        "stock": stockIngrediente
    }

    ingredientes.push(nuevoIngrediente);


}


function listarIngredientes(ingredientes){
    let tablaListarIngredientes = ""
    for( let i = 0; i < ingredientes.length; i++){
        tablaListarIngredientes += ` Ingrediente #${i + 1}\n`
        for(let o in ingredientes[i]){
            tablaListarIngredientes += `${o}: ${ingredientes[i][o]} \n`
        }
        tablaListarIngredientes += "-------------------- \n"
    }

    alert(tablaListarIngredientes)

    
    
}



function eliminarIngrediente(ingredientes, ingredienteParaEliminar){

    for( let i = 0; i < ingredientes.length; i++){


            if(ingredientes[i]["nombre"] === "Pan"){
                
                delete ingredientes[i]
            }
        
    }


}






export {anadirIngrediente, listarIngredientes, eliminarIngrediente};