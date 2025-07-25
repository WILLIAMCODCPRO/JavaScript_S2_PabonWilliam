import {ingredientes, categorias, hamburguesa, chefs} from "../baseDeDatos/baseDeDatos.js";
import { anadirIngrediente, listarIngredientes, eliminarIngrediente, actualizarIngrediente } from "../funciones/funcionesIngredientes.js";
import { anadirCategoria, listarCategoria, eliminarCategoria, actualizarCategoria } from "../funciones/funcionesCategoria.js";
import { anadirHamburguesa, listarHamburguesa, eliminarHamburguesa, actualizarHamburguesa } from "../funciones/funcionesHamburguesas.js";
import { anadirChefs, listarChef, eliminarChefs, actualizarChefs } from "../funciones/funcionesChefs.js";
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
        
        let ingredienteParaEliminar = parseInt(prompt( `${listarIngredientes(ingredientes)}Escribe el numero del ingredientes que quieres eliminar`));
        eliminarIngrediente(ingredientes, ingredienteParaEliminar);

      }

      else if(menuIngrediente === 4){
       
        let ingredienteParaActualizar = parseInt(prompt( `${listarIngredientes(ingredientes)}Escribe el numero del ingredientes que quieres actualizar`));
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
        
        let categoriaParaEliminar = parseInt(prompt( `${listarCategoria(categorias)}Escribe el numero de la categoria que quieres eliminar`));
        eliminarCategoria(categorias, categoriaParaEliminar);

      }

      else if(menuCategoria === 4){
        let categoriaParaActualizar = parseInt(prompt( `${listarCategoria(categorias)}Escribe el numero de la categoria que quieres actualizar`));
        actualizarCategoria(categorias, categoriaParaActualizar);
      }
    }

    if(menuPrincipal === 3){

        let menuHamburguesa = parseInt(prompt(`
     
        ¿Que deseas hacer con Hamburguesa?
  
        1. Añadir
  
        2. listar
  
        3. eliminar
  
        4. actualizar
      
      
      `));

      if(menuHamburguesa === 1){
        let nombreHamburguesa = prompt("Escribe el nombre de la Hamburguesa");

        let categoriaHamburguesa = prompt("Escribe la categoria de la Hamburguesa");

        let ingredientesHamburguesa = prompt("Escribe los ingredientes de las hamburguesas separados por comas")

        let listaIngredientesHamburguesa = ingredientesHamburguesa.split(",") // Se crea una lista donde cada vez que detecta una coma se crea un elmento nuevo

        let precioHamburguea = parseInt(prompt("Pasame el precio de la hamburguesa"));

        let chefHamburguesa = prompt("Pasame el nombre del chef de la hamburguesa");

        anadirHamburguesa(hamburguesa, nombreHamburguesa, categoriaHamburguesa, listaIngredientesHamburguesa, precioHamburguea, chefHamburguesa);
        
      }

      else if(menuHamburguesa === 2){
        alert(listarHamburguesa(hamburguesa));

      }

      else if(menuHamburguesa === 3){
        
        let hamburguesaParaEliminar = parseInt(prompt( `${listarHamburguesa(hamburguesa)}Escribe el numero de la hamburguesa que quieres eliminar`));
        eliminarHamburguesa(hamburguesa, hamburguesaParaEliminar);

      }

      else if(menuHamburguesa === 4){
       
        let hamburguesaParaActualizar = parseInt(prompt( `${listarHamburguesa(hamburguesa)}Escribe el numero de la hamburguesa que quieres actualizar`));
        actualizarHamburguesa(hamburguesa, hamburguesaParaActualizar);
      }
    }

    if(menuPrincipal === 4){

        let menuChef = parseInt(prompt(`
     
        ¿Que deseas hacer con Chefs?
  
        1. Añadir
  
        2. listar
  
        3. eliminar
  
        4. actualizar
      
      
      `));

      if(menuChef === 1){
        let nombreChef = prompt("Escribe el nombre deL Chef");

        let especialidadChef = prompt("Escribe la especialidad del chef");


        anadirChefs(chefs, nombreChef, especialidadChef);
        
      }

      else if(menuChef === 2){
        alert(listarChef(chefs));

      }

      else if(menuChef === 3){
        
        let chefParaEliminar = parseInt(prompt( `${listarChef(chefs)}Escribe el numero del chef que quieres eliminar`));
        eliminarChefs(chefs, chefParaEliminar);

      }

      else if(menuChef === 4){
        let chefParaActualizar = parseInt(prompt( `${listarChef(chefs)}Escribe el numero del chef que quieres actualizar`));
        actualizarChefs(chefs, chefParaActualizar);
      }
    }


}