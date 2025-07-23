

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

    return tablaListarIngredientes

    
    
}



function eliminarIngrediente(ingredientes, ingredienteParaEliminar){

    for( let i = 0; i < ingredientes.length; i++){


            if(ingredientes[i]["nombre"] === ingredienteParaEliminar){
                
                ingredientes.splice(i, 1); //El método "splice()" modifica directamente el array en esta línea elimina el primer elemento desde la posición i.
                i--; // Como despues de eliminar un elemento en la posición i los siguientes se desplazan a la izquierda se debe restar i para no saltarse el nuevo elemento en esa posición.
                     
            }
        
    }


}



function actualizarIngrediente(ingredientes, ingredienteParaActualizar){

    for(let i = 0; i < ingredientes.length; i++){
        if(ingredientes[i]["nombre"] === ingredienteParaActualizar){
            let nuevoNombreIngrediente = prompt("Pon el nuevo Nombre");
            let nuevaDescripcionIngrediente = prompt("Pon una nueva descripcion");
            let nuevoPrecioIngrediente = parseInt(prompt("Pon el nuevo precio"));
            let nuevoStockIngrediente = parseInt(prompt("Pon el nuevo stock"));

            let nuevoIngrediente =  {
                "nombre": nuevoNombreIngrediente,
                "descripcion": nuevaDescripcionIngrediente,
                "precio": nuevoPrecioIngrediente,
                "stock": nuevoStockIngrediente
              };

             ingredientes.splice(i,1,nuevoIngrediente); // Reemplaza el primer elemento que esta en la posicion i por el nuevo elemento "nuevoIngrediente"


        }
         
    }



}





export {anadirIngrediente, listarIngredientes, eliminarIngrediente, actualizarIngrediente};