import { useEffect,useState } from 'react'
import {bubbleSort,insertionSort} from '../Sort/Sorting'

function Algorithm() {

 
  console.log( bubbleSort([0,10,2,8,1]))

  console.log("-".repeat(10));
  console.log(insertionSort([2,0,10,14,15,22]));
  return (
    <>
    <p>Creacion y testeo de algoritmos</p>
    </>
  )
}

export default Algorithm