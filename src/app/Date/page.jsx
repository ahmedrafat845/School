"use client";
import React, { useContext, useEffect, useState } from 'react';
import style from './Date.module.css';
import { AuthContext } from '../context/Auth';


export default function Date1() {
  const { data } = useContext(AuthContext);
  
  const getCurrentTime = () => {
    const currentTime = new Date();
    return {
      timeString: currentTime.toLocaleTimeString(),
      hour: currentTime.getHours()
    };
  };

  const [date, setDate] = useState(getCurrentTime().timeString);
  const [Time, setTime] = useState(getCurrentTime().hour);

  useEffect(() => {
    const intervalID = setInterval(() => {
      const currentTime = getCurrentTime();
      setDate(currentTime.timeString);
      setTime(currentTime.hour);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <div className='text-center'>
        {Time < 12 ? (
          <div className={style.img1}>
            <div className={style.caption}>
              <h2>{date}</h2>
              <h1>Good morning <span className='text-danger'>{data.name} 🤗</span></h1>
            </div>
          </div>
        ) : (
          <div className={style.img2}>
            <div className={style.caption}>
              <h2>{date}</h2>
              <h1>Good evening <span className='text-danger'>{data.name}</span> 🤗</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
