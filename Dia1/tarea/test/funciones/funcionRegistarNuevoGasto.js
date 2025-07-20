gastos = [];




function registarNuevosGastos(gastos, montoDelGasto, categoria, descripcion ) {

    nuevoGasto = {
        monto : montoDelGasto,
        categoria : categoria,
        descripcion : descripcion
    };

    addGasto = gastos.push(nuevoGasto);

    return gastos;


      
}

registarNuevosGastos(gastos, 12, "Comida", "Rico");
registarNuevosGastos(gastos, 34, "Video Juegos", "Minecraf");
console.log(gastos);
