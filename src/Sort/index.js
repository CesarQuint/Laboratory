//!Bubble Sort
//* Cada elemento se compará así con su inmediato sucesor para ordenarse según sea mayor o menor que este. Una vez la pareja está ordenada correctamente, se toma el último número de cada tupla para volver a compararlo con el siguiente.

const bubbleSort = arreglo => {
    const longitud = arreglo.length;
    for (let i = 0; i < longitud; i++ ) {
      for (let j = 0; j < longitud - 1 - i; j++ ) {
        let actual = arreglo[ j ]
        let posicionSiguiente = arreglo[ j + 1 ]
        if ( actual > posicionSiguiente ) {
            //!AQUI SE GENERA EL SWITCH ENTRE LOS " LUGARES"
          [ arreglo[ j ], arreglo[ j + 1 ] ] = [ arreglo[ j + 1 ], arreglo[ j ] ];
        }
      }
    }
  
    return arreglo;
  };


export{
    bubbleSort
}