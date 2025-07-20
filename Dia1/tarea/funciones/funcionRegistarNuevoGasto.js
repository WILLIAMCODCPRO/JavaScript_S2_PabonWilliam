gastos = [];




function registarNuevosGastos(gastos, montoDelGasto, categoria, descripcion ) {

    nuevoGasto = {
        monto : montoDelGasto,
        categoria : categoria,
        descripcion : descripcion
    };

    addGasto = gastos.push(nuevoGasto)


      
}