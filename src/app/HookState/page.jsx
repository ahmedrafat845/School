"use client";
import React, { useState } from 'react'
import style from './HookState.module.css'

export default function HookState() {

    const [count, setCount] = useState(0)
    let increase=()=>{
      if(count<10){
        setCount(count+1)
      }else{
        setCount(0)
      }
        
    }
    let decrease=()=>{
        if(count>0){
            setCount(count-1)
        }
        
    }


  return (
    <>
    <div className={`${style.AllHook} pt-5`}>
        <div  className={`${style.hook} m-auto text-center py-4 mt-5`}>
          <h4>Count:</h4>
        <div className={`${style.count}`}>{count}</div>
            <div>
            <button className='btn btn-danger me-3' onClick={increase}>increase</button>
            <button className=' btn btn-warning ms-3' onClick={decrease}>decrease</button>
            </div>
        </div>
    </div>
      
    </>
  )
}
