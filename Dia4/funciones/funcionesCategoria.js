function anadirCategoria(categorias, nombreCategoria, descripcionCategoria){

    let nuevaCategoria =  {
        "nombre": nombreCategoria,
        "descripcion": descripcionCategoria,
    }

    categorias.push(nuevaCategoria);


}


function listarCategoria(categorias){
    let tablaListarCategorias = ""
    for( let i = 0; i < categorias.length; i++){
        tablaListarCategorias += ` Categoria #${i + 1}\n`
        for(let o in categorias[i]){
            tablaListarCategorias += `${o}: ${categorias[i][o]} \n`
        }
        tablaListarCategorias += "-------------------- \n"
    }

    return tablaListarCategorias

    
    
}



function eliminarCategoria(categorias, categoriaParaEliminar){

    for( let i = 0; i < categorias.length; i++){


            if(categorias[i]["nombre"] === categoriaParaEliminar){
                
                categorias.splice(i, 1);  //El método "splice()" modifica directamente el array en esta línea elimina el primer elemento desde la posición i
                i--;  // Como despues de eliminar un elemento en la posición i los siguientes se desplazan a la izquierda se debe restar i para no saltarse el nuevo elemento en esa posición
                     
            }
        
    }


}



function actualizarCategoria(categorias, categoriaParaActualizar){

    for(let i = 0; i < categorias.length; i++){
        if(categorias[i]["nombre"] === categoriaParaActualizar){
            let nuevoNombreCategoria = prompt("Pon el nuevo Nombre");
            let nuevaDescripcionCategoria = prompt("Pon una nueva descripcion");
            

            let nuevaCategoria =  {
                "nombre": nuevoNombreCategoria,
                "descripcion": nuevaDescripcionCategoria
                
              };

             categorias.splice(i,1,nuevaCategoria); // Reemplaza el primer elemento que esta en la posicion i por el nuevo elemento "nuevoIngrediente"



        }
         
    }



}





export {anadirCategoria, listarCategoria, eliminarCategoria, actualizarCategoria};