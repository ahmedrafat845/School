"use client";
import { decode } from "jsonwebtoken";
import { useRouter } from "next/navigation";

const { createContext, useState, useEffect } = require("react");


export let AuthContext=createContext()

export default function AuthContextProvider(props){
     const [data, setData] = useState('')
     let router=useRouter()

     let saveUserData=()=>{
      let incoded=localStorage.getItem('token')
      let decoded=decode(incoded)
      setData(decoded)

     }

     useEffect(() => {
        if(localStorage.getItem('token')){
            saveUserData()
            router.push('/School')

           
        }
     }, [])

     let logOut=()=>{
        localStorage.removeItem('token')
        setData('')
        router.push('/Login')
     }



     return <AuthContext.Provider value={{data,setData,saveUserData,logOut}}>
          {props.children}
     </AuthContext.Provider>

}