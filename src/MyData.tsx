import React, { useState } from 'react'

export const MyData = () => {
 const [data,setData]=   useState<number>(0)

 const inc = ()=>{

    setData(data+1)

 }
  return (
    <div>{data}
    
    <button onClick={inc}>+</button>
    </div>
  )
}
