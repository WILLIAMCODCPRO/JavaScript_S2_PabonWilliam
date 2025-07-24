import {ingredientes, categorias, hamburguesa, chefs} from "../baseDeDatos/baseDeDatos.js";
import { anadirIngrediente, listarIngredientes, eliminarIngrediente, actualizarIngrediente } from "../funciones/funcionesIngredientes.js";
import { anadirCategoria, listarCategoria, eliminarCategoria, actualizarCategoria } from "../funciones/funcionesCategoria.js";
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
        alert(listarIngredientes(ingredientes));

      }

      else if(menuIngrediente === 3){
        
        let ingredienteParaEliminar = prompt( `${listarIngredientes(ingredientes)}Escribe el nombre del ingredientes que quieres eliminar`);
        eliminarIngrediente(ingredientes, ingredienteParaEliminar);

      }

      else if(menuIngrediente === 4){
       
        let ingredienteParaActualizar = prompt( `${listarIngredientes(ingredientes)}Escribe el nombre del ingredientes que quieres actualizar`);
        actualizarIngrediente(ingredientes, ingredienteParaActualizar);
      }
    }

  if(menuPrincipal === 2){

        let menuCategoria = parseInt(prompt(`
     
        ¿Que deseas hacer con Categoria?
  
        1. Añadir
  
        2. listar
  
        3. eliminar
  
        4. actualizar
      
      
      `));

  if(menuCategoria === 1){
        let nombreCategoria = prompt("Escribe el nombre de la categoria");

        let descripcionCategoria = prompt("Escribe la descripcion de la categoria");


        anadirCategoria(categorias, nombreCategoria, descripcionCategoria);
        
      }

      else if(menuCategoria === 2){
        alert(listarCategoria(categorias));

      }

      else if(menuCategoria === 3){
        
        let categoriaParaEliminar = prompt( `${listarCategoria(categorias)}Escribe el nombre de la categoria que quieres eliminar`);
        eliminarCategoria(categorias, categoriaParaEliminar);

      }

      else if(menuCategoria === 4){
        let categoriaParaActualizar = prompt( `${listarCategoria(categorias)}Escribe el nombre de la categoria que quieres actualizar`);
        actualizarCategoria(categorias, categoriaParaActualizar);
      }
    }


}