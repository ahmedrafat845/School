"use client";
import Link from 'next/link'
import React, { useContext } from 'react'
import style from './NavBar.module.css'
import { AuthContext } from '../context/Auth';



export default function NavBar() {

  let {logOut,data}=useContext(AuthContext)


  return (
    <>
   <nav className={`${style.navbarr} navbar navbar-expand-lg bg-body-tertiary p-3`}>
        <div className="container-fluid">
            <a className={`${style.navbarBrand} navbar-brand text-danger`} href="#">School</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
               


               {data? (
                <>
                 <div className='d-flex pt-2'>
                 <li className="nav-item">
                   <Link className="nav-link" href="/School">School</Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" href="/Date">Date</Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" href="/Questions">Questions</Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" href="/HookState">Hook State</Link>
                 </li>
                 </div>
                <span className="nav-link text-white" >
                    <button className="btn btn-danger" onClick={logOut}>
                      Log Out
                    </button>
                </span>
                
                </>
               
               ):(
            <>
            <Link className="nav-link text-white" href="/Login">
            <button className=" btn btn-success">
            Login
            </button>
             </Link>
             <Link className="nav-link text-white" href="/SignUp">
                 <button className=" btn btn-danger">
                 Sign Up
                 </button>
             </Link>
           </>
          
          )}
                
            </ul>
               
               
          
           
          
            </div>
        </div>
    </nav>

      
    </>
  )
}
