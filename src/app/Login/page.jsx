"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import style from './Login.module.css'
import { AuthContext } from '../context/Auth';


export default function Login() {

  let {saveUserData}=useContext(AuthContext)
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const router = useRouter(); 
  const [loading, setloading] = useState(false)

  

  const notify = (msg,type) => {
    toast[type](msg,{
      autoClose:1000 ,
    });
  }

  let login=async()=>{
    setloading(true)
   try{
    let {data}=await axios.post(`https://registeration-theta.vercel.app/users/signIn`,user)
    console.log(data.token);
    if(data.message==='success'){
      localStorage.setItem('token',data.token)
      saveUserData()
      notify('success', 'success');
      setloading(false)
      router.push('/School');


    }else{
      notify(data.message, 'error');
      setloading(false)

    }
   }catch{
    notify("error in server", 'error');
    setloading(false)
   }
   
  }



  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleData = (e) => {
    e.preventDefault();
    if (user.email== '' || user.password== '') {
      notify('Inputs must not be empty', 'error');
    } else if (user.password.length < 3 || user.email.length < 3) {
      notify('Password should be greater than 3', 'error');
    } else {
      login()
     
    }
  };

  return (
   <>
   <div className={`${style.bg}`}>
   <div className="container overflow-hidden">
   <div className="row pt-5 mt-5">
      <div className={`${style.form} col-md-6 m-auto mt-3 p-5 rounded-5`}>
        <h2 className='text-success my-3'>Welcome To Our Login 😊</h2>
        <form onSubmit={handleData}>
          <input
            type="text"
            placeholder="Enter your email.."
            className="form-control"
            name="email"
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Enter your password.."
            className="form-control my-3"
            name="password"
            onChange={handleInput}
          />
        
          <button type="submit" className="btn btn-danger w-100">
          {loading? (
            <i class="fa-solid fa-spinner fa-spin text-white"></i>
          ):('Login')}
          </button>
        </form>
      </div>
    </div>
   </div>
   </div>
  
  
   
   
   
   
   </>
  );
}
