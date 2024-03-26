import React, { useEffect, useState } from 'react'
import { IUser } from './types/IUser'
import { User } from './User';

export const DisplayData = () => {

  const [data,setData]=  useState<IUser[]>([]);

  useEffect( ()=>{

    async function display() {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let data: IUser[] =await response.json()
       setData(data);
      }

      display();
 
  },[])
  return (
   <>
   {
    data.map((c:IUser,index : number)=>{

        return (<User index={index }  user={ c}/>)
    })
   }
   </>
  )
}
