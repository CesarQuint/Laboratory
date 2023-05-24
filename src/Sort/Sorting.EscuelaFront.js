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

console.log(bubbleSortRecursivity(arrExamp));