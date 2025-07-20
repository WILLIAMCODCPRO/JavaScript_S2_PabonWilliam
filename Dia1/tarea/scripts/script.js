import {registrarNuevosGastos, gastos} from "../funciones/funcionRegistrarNuevoGasto.js";
let boolianito = true;


while(boolianito == true) {
 let menu = parseInt(prompt(`
 =============================================
          Simulador de Gasto Diario
 =============================================
 Seleccione una opción:

 1. Registrar nuevo gasto
 2. Listar gastos
 3. Calcular total de gastos
 4. Generar reporte de gastos
 5. Salir
 =============================================
`));
 
 if(menu == 1) {
    let montoDelGasto = parseInt(prompt(`
    =============================================
            Registrar Nuevo Gasto
    =============================================
    Ingrese la información del gasto:

    - Monto del gasto:
    =============================================
        `));

    let categoria = prompt(`
    =============================================
            Registrar Nuevo Gasto
    =============================================
    Ingrese la información del gasto:

    - Categoría (ej. comida, transporte, entretenimiento):
    =============================================
        `);

     let descripcion = prompt("¿Deseas agregar una descripcion? (s/n)");
     if(descripcion == "s"){
        
        descripcion = prompt("Escribe tu descripcion");

     }

     else if(descripcion == "n"){

        descripcion = "No hay descripcion";
     }

     let guardar = prompt("¿Quieres guardar el gasto? s/n");

     if(guardar == "s"){

      registrarNuevosGastos(montoDelGasto, categoria, descripcion);
      

     }
     
     else if(guardar == "n"){
      boolianito = true;
     }
     
 }

 else if(menu == 2){

   parseInt(prompt(`

        =============================================
                       Listar Gastos
        =============================================
        Seleccione una opción para filtrar los gastos:

        1. Ver todos los gastos
        2. Filtrar por categoría
        3. Filtrar por rango de fechas
        4. Regresar al menú principal
        =============================================
       
      `))

 }

 
 
}