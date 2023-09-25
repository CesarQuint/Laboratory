//!Bubble Sort

//-El "" es conocido por su terrible rendimiento

//*Version Iteratica

const arrExamp = [2,13,28,0,4,6,5,1,67,56,34]

const bubbleSort = arr => {
    const l = arr.length

    for (let i = 0; i < l; i++) {
       
        for (let j = 0; j < l - 1 -i ; j++) {
           let current = arr[ j ]

           let next = arr[ j + 1 ]

           if(current > next ) 
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]

        }
       
    }
    return arr
}

//*Version Recursiva

const bubbleSortRecursivity = arr => {
    const l = arr.length

    for (let i = 0; i < l; i++) {
        console.log(i);
        let current = arr[ i ]
        let next = arr[ i + 1 ]

        if(current > next ) {
         [arr[i],arr[i+1]] = [next,current]
         bubbleSortRecursivity(arr)
        }

    }
    return arr
}

//!NOTA :Complejidad O(n^2) siendo de los peores.Si la data esta casi ordenada ,la complejidad puede ser tan buena como o(n)

//!!Selection Sort

//-Recorre todo el arreglo hasta seleccionar el elemento que cumple con los criterios impuestos

const SelectionSort = arr => {
 
    for (let i = 0; i < arr.length; ++i) {
        let j = min = i
        for (++j ; j < arr.length; ++j) {
            ( arr[ j ] < arr[ min ] ) && ( min = j );
        }
        [ arr[ i ], arr[ min ] ] = [ arr[ min ], arr[ i ] ]
    }
    return arr
}

//!Complejidad O(n^2)

//!Insertion Sort 

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
  


