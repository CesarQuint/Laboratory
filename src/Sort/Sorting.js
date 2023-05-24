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

//!Algoritmos Complejos ,su uso es mejor cuando el conjunto de datos es mayor ,regularmente es la fragmentacion del consjunto en subconjuntos 

//!Shell Sort

//*Este algoritmo tiene 2 posibles implementaciones GAPS Fijos  y otra en que estos se calculan de forma dinamica a partir del conjunto de entrada 

//TODO: Investigar secuencia  GAP 

//-El siguiente ejemplo se realiza con una secuencia corta de solo 3 elementos (5,3,1)

const shellSort = arr => {
  const gaps = [5, 3, 1];
  for ( let g = 0; g < gaps.length; ++g ) {
    for ( let i = gaps[ g ]; i < arr.length; ++i ) {
      const temp = arr[ i ];
      let j = i;
      for ( ; j >= gaps[ g ] && arr[j - gaps[ g ] ] > temp; j -= gaps[ g ] ) {
        arr[ j ] = arr[ j - gaps[ g ] ];
      }
      arr[ j ] = temp;
    }
  }

  return arr;
}


const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = shellSort(arr);
console.log(result);

//!Shell Short con GAPS de forma dinamica
const shellSortAlt = arr => {
  const gap = arr.length;
  let h = 1;
  while ( h < gap / 3 ) {
    h = 3 * h + 1;
  }
  while ( h >= 1 ) {
    for ( let i = h; i < gap; i++ ) {
      for ( let j = i; j >= h && arr[ j ] < arr[ j - h ];  j -= h ) {
        [ arr[ j ], arr[ j - h ] ] = [ arr[ j - h ], arr[ j ] ];
      }
    }
    h = ( h - 1 ) / 3;
  }

  return arr;
}


const arrAlt = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const resultAlt = shellSortAlt(arrAlt);

console.log(resultAlt);

//!Mege Sort

//-Este algoritmo subdivide el conjunto original en 2 se tamaño similar y al finalizar se mesclan estos 2 subconjuntos para obtener el conjunto final 

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = parseInt(arr.length / 2) | 0;
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  const merge = (left, right) => {
    const result = [];
    let il = ir = 0;

    while (il < left.length && ir < right.length) {
      result.push( (left[il] < right[ir]) ? left[il++] : right[ir++] );
    }

    return [...result, ...left.slice(il), ...right.slice(ir)];
  }

  return merge(mergeSort(left), mergeSort(right));
}

const arrMerg = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const resultMerg = mergeSort(arrMerg);

//!QuickSort

//-A partir de un elemento cualquiera de la lista denominado pivote ,resitual el conjunto restante a ambos lados ,segun estos sean mayores o menores y esto se repite de forma recursiva ,quedando al final el conjunto ordenado.

const quickSort = ( [ x = [], ...xs ] ) => {
  return ( x.length === 0 ) ? [] : [...quickSort( xs.filter( y => y <= x ) ),x,...quickSort( xs.filter( y => y > x ) )];
}

const arrQuick = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const resultQuick = quickSort(arrQuick);


export{
    bubbleSort, 
    insertionSort,
    selectionSort
}