import {ingredientes, cateorias, hamburguesa, chefs} from "../baseDeDatos/baseDeDatos.js";
import { anadirIngrediente, listarIngredientes } from "../funciones.js/funcionesIngredientes.js";

let boolianito = true;

while(boolianito){
    let menuPrincipal = parseInt(prompt(`
     
      ¿Que base de datos deseas manipular?

      1. Ingredientes

      2. Categorias

      3. Hamburguesas

      4. Chefs
    
    
    `));


    if(menuPrincipal === 1){

        let menuIngrediente = parseInt(prompt(`
     
        ¿Que deseas hacer con Ingredientes?
  
        1. Añadir
  
        2. listar
  
        3. eliminar
  
        4. actualizar
      
      
      `));

      if(menuIngrediente === 1){
        let nombreIngrediente = prompt("Escribe el nombre del ingrediente");

        let descripcionIngrediente = prompt("Escribe la descripcion del ingrediente");

        let precioIngrediente = parseInt(prompt("Pasame el precio del ingrediente"));

        let stockIngrediente = parseInt(prompt("Pasame el stock del ingrediente"));

        anadirIngrediente(ingredientes, nombreIngrediente, descripcionIngrediente, precioIngrediente,stockIngrediente);
        
      }

      else if(menuIngrediente === 2){
        listarIngredientes(ingredientes)

      }
    }


}