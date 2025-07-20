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



registrarNuevosGastos(12, "Comida", "Rico");
registrarNuevosGastos( 34, "Video Juegos", "Minecraf");
console.log(gastos);
