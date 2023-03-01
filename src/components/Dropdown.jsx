import {useState} from 'react'

function Dropdown() {
    const [activo,setActivo]=useState(false)

    const handleMostrar=()=>{
        setActivo(!activo)
    }

  return (
    <div className='dropContainer'>
        <div className='dropBody'>
            <section
            className='select'
            onClick={()=>handleMostrar()}
            >
                <h2>Container example</h2>
                <span>{!activo ?"+":"-"}</span>
            </section>
            <section className={`${activo ?'show':''}  options `}>
                <a href="/">Opt 1</a>
                <a href="/">Opt 2</a>
                <a href="/">Opt 3</a>
                <a href="/">Opt 4</a>
            </section>
            
        </div>
        {/**DropDown con hover */}
        <div className='dropBody'>
            <section
            className='select2'
            onClick={()=>handleMostrar()}
            >
                <h2>Container example</h2>
                <span>{!activo ?"+":"-"}</span>
            </section>
            <section className={`${activo ?'show':''}  options `}>
                <a href="/">Opt 1</a>
                <a href="/">Opt 2</a>
                <a href="/">Opt 3</a>
                <a href="/">Opt 4</a>
            </section>
            
        </div>
        
        
    </div>
  )
}

export default Dropdown