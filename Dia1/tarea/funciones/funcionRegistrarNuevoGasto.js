let gastos = [];




function registrarNuevosGastos(montoDelGasto, categoria, descripcion ) {

    let nuevoGasto = {
        monto : montoDelGasto,
        categoria : categoria,
        descripcion : descripcion
    };

    gastos.push(nuevoGasto)

    return gastos


      
}

export {registrarNuevosGastos, gastos};