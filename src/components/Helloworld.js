import React, { useEffect, useState } from 'react'
import {AiOutlinePlus ,AiOutlineMinus} from 'react-icons/ai'

const Helloworld = () => {

    const [green, setgreen] = useState(false)
    const [red, setred] = useState(false)
    

    const[num,setNum]=useState(0)
    const incNum = () =>{
        setNum(num+1)
        // if(num>98){
        //     setgreen(true)
        // }else if(num>5){
        //     setred(false)
        // }
    }
    const decNum= ()=>{
            setNum(num-1)
            // if(num<8){
            //     setgreen(false)
            //     setred(true)
            // }
    }

    useEffect(() => {
        if(num<5){
            setred(true)
            setgreen(false)
        }else if(num>100){
            setgreen(true)
            setred(false)
        }else if(num>=5 && num<=100){
            setgreen(false)
            setred(false)
        }
    }, [red,green,num])

    console.log(green,red);
    return (
        <div className='hello'>
            <h1>hello world</h1>
            <div className='main_div'>
        <div className='center_div'>
            <div className='decr' onClick={decNum}><AiOutlineMinus/></div>
            <div className="num_main">
            <div className= {green?"green":red?"red":"white"}>{num}</div>
            </div>
            <div className='incr' onClick={incNum}><AiOutlinePlus/></div>
        </div>
    </div>
        </div>
    )
}

export default Helloworld
