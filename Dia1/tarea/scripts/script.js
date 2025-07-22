import {registrarNuevosGastos, gastos} from "../funciones/funcionRegistrarNuevoGasto.js";
import { listarTodosLosGastos } from "../funciones/funcionesListarGastos.js";
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

    let categoria = parseInt(prompt(`
    =============================================
            Registrar Nuevo Gasto
    =============================================
    Ingrese la información del gasto:

    - Categoría (1.comida 2.transporte 3.entretenimiento 4.otros):
    =============================================
        `));

        if(categoria === 1){

         categoria = "comida";
        }

        else if(categoria === 2){
         categoria = "transporte"

        }

        else if(categoria === 3){
         categoria = "entretenimiento"

        }

        else if(categoria === 4){
         categoria = "otros"

        }



     let descripcion = prompt("¿Deseas agregar una descripcion? (s/n)");
     if(descripcion == "s"){
        
        descripcion = prompt("Escribe tu descripcion");

     }

     else if(descripcion == "n"){

        descripcion = "No hay descripcion";
     }

     let guardar = prompt("¿Quieres guardar el gasto? s/n");

     if(guardar == "s"){

      let fecha = new Date().toLocaleDateString();

      registrarNuevosGastos(montoDelGasto, categoria, descripcion, fecha);
      

     }
     
     else if(guardar == "n"){
      boolianito = true;
     }
     
 }

 else if(menu == 2){

   let menuListarGastos = parseInt(prompt(`

        =============================================
                       Listar Gastos
        =============================================
        Seleccione una opción para filtrar los gastos:

        1. Ver todos los gastos
        2. Filtrar por categoría
        3. Filtrar por rango de fechas
        4. Regresar al menú principal
        =============================================
       
      `));

   if(menuListarGastos == 1){
      listarTodosLosGastos(gastos)
   };


   

 } 

else if(menu === 3){
   let menuCalcularTotalGastos = parseInt(prompt(`
           =============================================
                Calcular Total de Gastos
           =============================================
           Seleccione el periodo de cálculo:

           1. Calcular total diario
           2. Calcular total semanal
           3. Calcular total mensual
           4. Regresar al menú principal
           =============================================
      `));

}

else if(menu === 4){
   let menuGenerarReporteDeGastos = parseInt(prompt(`
        =============================================
               Generar Reporte de Gastos
        =============================================
        Seleccione el tipo de reporte:

        1. Reporte diario
        2. Reporte semanal
        3. Reporte mensual
        4. Regresar al menú principal
       =============================================
      `));
}

else if(menu === 5){
   let salir = prompt("¿Desea salir del programa? (S/N):");

   if(salir === "s"){
      boolianito = false;
   }

   else if(salir === "n"){
      boolianito = true;
   }
}
 

 
 
}