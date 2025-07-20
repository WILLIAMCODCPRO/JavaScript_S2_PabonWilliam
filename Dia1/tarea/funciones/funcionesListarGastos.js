

function listarTodosLosGastos(gastos){
    let tablaGasto = "";
    for(let i = 0; i < gastos.length; i++){
     tablaGasto += `Gasto #${i + 1}\n`;
        for(let o in gastos[i]){
            
            tablaGasto += ` ${o}: ${gastos[i][o]}\n`
           
            
        }

        tablaGasto += "--------------------------\n";

        
      
    }

    alert(tablaGasto);

        

    
}

export {listarTodosLosGastos};

