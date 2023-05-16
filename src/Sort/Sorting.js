//!Bubble Sort
//* Cada elemento se compará así con su inmediato sucesor para ordenarse según sea mayor o menor que este. Una vez la pareja está ordenada correctamente, se toma el último número de cada tupla para volver a compararlo con el siguiente.

const bubbleSort = arreglo => {
    const longitud = arreglo.length
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
  
    return arreglo
  }

//!!Insertion Sort
//TODO:BUSCAR MAS INFORMACION ACERCA DE LOS ALGORITMOS
//*En lugar de comparar a > b y hacer esto en bucle este alritmo compara a > b ? a > c : arreglo[a] = arreglo [b] ..... en resumidas cuentas este algoritmo compara un item con toda la cadena hasta encontrar su lugar 

const insertionSort = arreglo => {
    const longitud = arreglo.length;
    let posicionActual
    let temp
  
    for ( let i = 1; i < longitud; i++ ) {
      posicionActual = i;
      temp = arreglo[ i ];
      while ( posicionActual > 0 && arreglo[ posicionActual - 1 ] > temp ) {
        arreglo[ posicionActual ] = arreglo[ posicionActual - 1 ];
        posicionActual--;
      }
      arreglo[ posicionActual ] = temp;
    }
  
    return arreglo;
  }
  
//!!Selection Sort 
//*Algoritmo que busca el menor de los valores y lo mueve al comienzo este se mantiene recursivo hasta mover los valores la diferencia con el anterior es que compara a < [...arreglo]

const selectionSort = arreglo => {
    for ( let j = 0; j < arreglo.length; ++j ) {
      let i = iMin = j;
      for ( ++i; i < arreglo.length; ++i ) {
        ( arreglo[ i ] < arreglo[ iMin ] ) && ( iMin = i );
      }
      [ arreglo[ j ], arreglo[ iMin ] ] = [ arreglo[ iMin ], arreglo[ j ] ];
    }
  
    return arreglo;
  }

//!!Notacion Big O 

//* Analiza el algoritmo desde 2 perspectivas , 1.-Uso de memoria ,2.- Velocidad 

//* Para poder clasificar las formas en que crece los algoritmos dependiendo de la entrada usamos la notacion asintotica 

//TODO:Investigar notacion asintotica 

//- Clasificaion de Complejidades
//- Big O^1 etc....

//* Cualquien funcion o linea de codigo se considera # 0(1) siempre y cuando no sea un ciclo ,no tenga recurcion o no se llame a una funcion que haga cualquiera de las 2 anteriores  

//* Los ciclos que van incrementanddo por un numero constante se consideran 0(n) , siempre y cuando vaya iterando dependiendo de la entrada 

//*Cuando tenemos ciclos anidados la complejidad depende de la complejidad que tenemos del ciclo anidado llegando a 0(n^2) si es que solo es un ciclo anidado y asi subiendo susesivamente dependiendo de los ciclos anidados y que iteren basandose en la entrada 

//* Si la entrada n se va multiplicando o dividiendo pasara a ser 0(log[log[n]]) 
export{
    bubbleSort, 
    insertionSort,
    selectionSort
}