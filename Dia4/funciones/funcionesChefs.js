function anadirChefs(chefs, nombreChef, especialidadChef){

    let nuevoChef =  {
        "nombre": nombreChef,
        "especialidad": especialidadChef,
    }

    chefs.push(nuevoChef);


}


function listarChef(chefs){
    let tablaListarChefs = ""
    for( let i = 0; i < chefs.length; i++){
        tablaListarChefs += ` Chefs #${i + 1}\n`
        for(let o in chefs[i]){
            tablaListarChefs += `${o}: ${chefs[i][o]} \n`
        }
        tablaListarChefs += "-------------------- \n"
    }

    return tablaListarChefs

    
    
}



function eliminarChefs(chefs, chefParaEliminar){

    for( let i = 0; i < chefs.length; i++){


            if(chefs[i]["nombre"] === chefParaEliminar){
                
                chefs.splice(i, 1);  //El método "splice()" modifica directamente el array en esta línea elimina el primer elemento desde la posición i
                i--;  // Como despues de eliminar un elemento en la posición i los siguientes se desplazan a la izquierda se debe restar i para no saltarse el nuevo elemento en esa posición
                     
            }
        
    }


}



function actualizarChefs(chefs, chefParaActualizar){

    for(let i = 0; i < chefs.length; i++){
        if(chefs[i]["nombre"] === chefParaActualizar){
            let nuevoNombreChef = prompt("Pon el nuevo Nombre");
            let nuevaEspecialidadChef = prompt("Pon una nueva especialidad");
            

            let nuevoChef =  {
                "nombre": nuevoNombreChef,
                "especialidad": nuevaEspecialidadChef
                
              };

             chefs.splice(i,1,nuevoChef); // Reemplaza el primer elemento que esta en la posicion i por el nuevo elemento "nuevoIngrediente"



        }
         
    }



}





export {anadirChefs, listarChef, eliminarChefs, actualizarChefs};