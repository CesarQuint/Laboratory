import {useState,useEffect} from 'react'

function Carrousel() {
    //*Variables index of the Arr
    const [startArr,setStartArr]=useState(0)
    const [endArr,setEndArr]=useState(4)
    const [activeArr,setActiveArr]=useState([])
    const [disabledPlus,setDisabledPlus]=useState(false)
    const [disabledLess,setDisabledLess]=useState(true)

    const exArr=[
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i"
    ]
    const itArr=exArr.slice(0,4)


    useEffect(()=>{
        if(!activeArr.length){
            setActiveArr(itArr)
        }
    },[])

    useEffect(()=>{
        const itArr=exArr.slice(startArr,endArr)
        setActiveArr(itArr)
    },[endArr,startArr])
    
    function handleRecorrer(event,value){
        if(value=="plus"){
            if(endArr>=exArr.length){
                setDisabledPlus(true)
                return
            }
            setDisabledLess(false)
            setStartArr(startArr+1)
            setEndArr(endArr+1)
        }else if(value=="less"){
            if(startArr<=0){
                setDisabledLess(true)
                return
            }
            setDisabledPlus(false)
            setStartArr(startArr-1)
            setEndArr(endArr-1)
        }
    }
   

  return (
    <div className='carouselContainer'>
         <input type="button" disabled={disabledLess} value="<" 
         onClick={event=>handleRecorrer(event,"less")}
         />
         <div className='limitArea'>
            {
                activeArr.map(e=>(
                    <div className='card' key={e}>
                        <p>{e}</p>
                    </div>
                ))
            }
           
         </div>
         <input type="button" value=">" 
         disabled={disabledPlus}
            onClick={event=>handleRecorrer(event,"plus")}
            />
       
    </div>
  )
}

export default Carrousel