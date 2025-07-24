function anadirHamburguesa(hamburguesa, nombreHamburguesa, categoriaHamburguesa, listaIngredientesHamburguesa, precioHamburguea, chefHamburguesa){

    let nuevaHamburguesa =  {
        "nombre": nombreHamburguesa,
        "categoria": categoriaHamburguesa,
        "ingredientes": listaIngredientesHamburguesa,
        "precio": precioHamburguea,
        "chef": chefHamburguesa
    }

    hamburguesa.push(nuevaHamburguesa);


}


function listarHamburguesa(hamburguesa){
    let tablaListarHamburguesa = ""
    for( let i = 0; i < hamburguesa.length; i++){
        tablaListarHamburguesa += ` Hamburguesa #${i + 1}\n`
        for(let o in hamburguesa[i]){
            tablaListarHamburguesa += `${o}: ${hamburguesa[i][o]} \n`
        }
        tablaListarHamburguesa += "-------------------- \n"
    }

    return tablaListarHamburguesa

    
    
}



function eliminarHamburguesa(hamburguesa, hamburguesaParaEliminar){

    for( let i = 0; i < hamburguesa.length; i++){

        let numeroTablaHamburguesa = i + 1


            if(numeroTablaHamburguesa === hamburguesaParaEliminar){
                
                hamburguesa.splice(i, 1); 
                
                     
            }
        
    }


}



function actualizarHamburguesa(hamburguesa, hamburguesaParaActualizar){

    for(let i = 0; i < hamburguesa.length; i++){
        let numeroTablaHamburguesa = i + 1
        if(numeroTablaHamburguesa === hamburguesaParaActualizar){
            let nuevoNombreHamburguesa = prompt("Pon el nuevo Nombre");
            let nuevaCategoriaHamburguesa = prompt("Pon una nueva categoria");
            let nuevosIngredientesHamburguesa = prompt("Pon los nuevos ingredientes separados por comas");
            let listaNuevosIngredientes = nuevosIngredientesHamburguesa.split(",") // Se crea una lista donde cada vez que detecta una coma se crea un elmento nuevo
            let nuevoPrecioHamburguesa = prompt("Pon el nuevo precio");
            let nuevoChefHamburguesa = prompt("Escribe el nuevo nombre del nuevo chef");

            let nuevaHamburguesa =  {
                "nombre": nuevoNombreHamburguesa,
                "categoria": nuevaCategoriaHamburguesa,
                "ingredientes": listaNuevosIngredientes,
                "precio": nuevoPrecioHamburguesa,
                "chef": nuevoChefHamburguesa
              };

             hamburguesa.splice(i,1,nuevaHamburguesa); // Reemplaza el primer elemento que esta en la posicion i por el nuevo elemento "nuevoIngrediente"


        }
         
    }



}





export {anadirHamburguesa, listarHamburguesa, eliminarHamburguesa, actualizarHamburguesa};