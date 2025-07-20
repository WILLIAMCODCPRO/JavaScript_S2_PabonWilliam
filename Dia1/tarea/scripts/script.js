boolianito = true;

while(boolianito = true) {
 menu = parseInt(prompt(`
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
    montoDelGasto = parseInt(prompt(`
    =============================================
            Registrar Nuevo Gasto
    =============================================
    Ingrese la información del gasto:

    - Monto del gasto:
    =============================================
        `));

    categoria = prompt(`
    =============================================
            Registrar Nuevo Gasto
    =============================================
    Ingrese la información del gasto:

    - Categoría (ej. comida, transporte, entretenimiento):
    =============================================
        `);

     descripcion = prompt("¿Deseas agregar una descripcion? (s/n)");
     if(descripcion == "s"){
        
        descripcion = prompt("Escribe tu descripcion");

     }

     else if(descripcion == "n"){

        descripcion = "No hay descripcion";
     }

     guardar = prompt("¿Quieres guardar el gasto? s/n")
 }

 
 
}