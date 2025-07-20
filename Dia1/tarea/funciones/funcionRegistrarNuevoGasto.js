let gastos = [];




function registrarNuevosGastos(montoDelGasto, categoria, descripcion, fecha ) {

    let nuevoGasto = {
        monto : montoDelGasto,
        categoria : categoria,
        descripcion : descripcion,
        Fecha : fecha
    };

    gastos.push(nuevoGasto)

    return gastos


      
}

export {registrarNuevosGastos, gastos};