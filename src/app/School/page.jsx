"use client";
import React, { useState } from 'react';
import style from './School.module.css'

export default function School() {
  const [calc, setCalc] = useState('');
  const [user, setUser] = useState({
    arabic: '',
    english: '',
    math: '',
  });
  const [grade, setgrade] = useState('')
  const [img, setimg] = useState('')


  // const [arabic, setArabic] = useState();
  // const [english, setEnglish] = useState();
  // const [math, setMath] = useState();


  // let handelChange=(e)=>{
  //   let {name,value}=e.target
  //   if(name==="arabic"){
  //       setArabic(Number(value))
  //   }else if(name==="english"){
  //       setEnglish(Number(value))
  //   }else{
  //       setMath(Number(value))
  //   }


  // }




  let handelChange=(e)=>{
    let myUser={...user}
    myUser[e.target.name]=Number(e.target.value)
    setUser(myUser)
    console.log(myUser);

  }

  let handleCalc = (e) => {
    e.preventDefault();
    const { arabic, english, math } = user;
    setCalc(arabic + english + math);
    if(arabic + english + math>=110&& arabic + english + math <=130){
      setgrade('very good')
      setimg('/img/dance.gif')

    }else if(arabic + english + math >=130 && arabic + english + math <=150){
      setgrade('excelant')
      setimg('/img/dance.gif')

    }else if(arabic + english + math >=70 && arabic + english + math <=130){
      setgrade('good')
      setimg('/img/dance.gif')

    }
    else if( arabic + english + math <70){
      setgrade('Fallen')
      setimg('/img/sad.gif')

    }
  };

  return (
    <>
    <div className={`${style.bg} bg-danger overflow-hidden py-5`}>
      <div className="container  ">
        <div className="row ">
          <div className={`${style.form} p-5  rounded-5 col-md-10 m-auto`}>
           <div className="row">
            <div className="col-md-9">
       
              <h2>welcome to Schoooool 🤗</h2>
              <div className={`${style.line}`}></div>
              <form onSubmit={handleCalc}>
                <input
                  className="form-control"
                  type="number"
                  name="arabic"
                  value={user.arabic}
                  onChange={handelChange}
                  placeholder="Arabic"
                />
                <input
                  className="form-control my-3"
                  type="number"
                  name="english"
                  value={user.english}
                  onChange={handelChange}
                  placeholder="English"
                />
                <input
                  className="form-control"
                  type="number"
                  name="math"
                  value={user.math}
                  onChange={handelChange}
                  placeholder="Math"
                />
                <button className="btn btn-danger my-3 w-100" type="submit">
                  Calc
                </button>
              </form>
              <input
                className="form-control"
                type="number"
                value={calc}
                readOnly
                placeholder="Total"
              />
             
        
            </div>
            <div className="col-md-3 bg-white rounded-5 p-3 text-center">
              <h3 className='text-success'>Your Result :</h3>
              <h2 className='text-danger'>{grade}</h2>
              {img?(
                <img src={img} className={`${style.gradeImg}`} alt="" />
              ):''}

            </div>
           </div>
          </div>
        
        </div>
      </div>
    </div>
    </>
  );
}

