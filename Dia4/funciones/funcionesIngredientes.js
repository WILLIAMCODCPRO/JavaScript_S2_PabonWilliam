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


            if(ingredientes[i]["nombre"] === ingredienteParaEliminar){
                
                ingredientes.splice(i, 1); //El método "splice()" modifica directamente el array en esta línea elimina 1 elemento desde la posición i.
                i--; // Como después de eliminar un elemento en la posición i los siguientes se desplazan a la izquierda se debe restar i para no saltarse el nuevo elemento en esa posición.
                     
            }
        
    }


}






export {anadirIngrediente, listarIngredientes, eliminarIngrediente};