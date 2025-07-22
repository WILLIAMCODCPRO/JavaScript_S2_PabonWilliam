let gastos = [
  {
    monto: 15000,
    categoria: "comida",
    descripcion: "almuerzo en restaurante",
    fecha: "2025-07-20"
  },
  {
    monto: 8000,
    categoria: "transporte",
    descripcion: "bus intermunicipal",
    fecha: "2025-07-19"
  },
  {
    monto: 12000,
    categoria: "entretenimiento",
    descripcion: "cine con amigos",
    fecha: "2025-07-18"
  }
];

function listarTodosLosGastos(gastos){
    for(let i = 0; i < gastos.length; i++){
      console.log(`Gasto #${i + 1}`)
        for(let o in gastos[i]){
            
            console.log(` ${o}: ${gastos[i][o]}`);
           
            
        }

        console.log("--------------------------");

        
      
    }

        

    
}

listarTodosLosGastos(gastos);



function filtarPorCategoria(gastos){

  let listaCategoria = []
  let filtro = parseInt(prompt("Elige la categoria para filtrar 1.comida 2.transporte 3.entretenimiento 4.otros"));

  if(filtro === 1){
    filtro = "comida"
    for(let i = 0; i < gastos.length; i++){
      for( let o in gastos[i]){
        
      }
    }
  }

}


filtarPorCategoria(gastos);