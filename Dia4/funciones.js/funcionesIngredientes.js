function anadirIngrediente(ingredientes, nombreIngrediente, descripcionIngrediente, precioIngrediente, stockIngrediente){

    let nuevoIngrediente =  {
        "nombre": nombreIngrediente,
        "descripcion": descripcionIngrediente,
        "precio": precioIngrediente,
        "stock": stockIngrediente
    }

    ingredientes.push(nuevoIngrediente);


}


function listarIngredientes(ingredientes)






export {anadirIngrediente};