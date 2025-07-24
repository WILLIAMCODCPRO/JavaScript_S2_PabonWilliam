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
                
                categorias.splice(i, 1); 
                i--;  
                     
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

             categorias.splice(i,1,nuevaCategoria); 


        }
         
    }



}





export {anadirCategoria, listarCategoria, eliminarCategoria, actualizarCategoria};