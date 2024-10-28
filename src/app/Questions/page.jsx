"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from './Questions.module.css'

export default function page() {
  
  const [question, setQuestion] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState({})
  const [score, setScore] = useState(0)
  const [loading, setloading] = useState(true)
  const [correctAswers, setCorrectAswers] = useState([])


 let getQuestions=async()=>{
  setloading(true)
 try{
  let {data}=await axios.get(`https://opentdb.com/api.php?amount=10&category=21&difficulty=easy`)
  let questionsShuffle=data.results.map((item)=>{
    const answers=[...item.incorrect_answers,item.correct_answer].sort(()=> Math.random() - 0.5)
    return { ...item, answers };
  })
  setQuestion(questionsShuffle)
  setloading(false)
 }catch(error){
  console.log(error);
  setloading(false)
 }}
 
 useEffect(() => {
  const timer = setTimeout(() => {
    getQuestions();
  }, 1000);
  return () => clearTimeout(timer);
}, []);



 let handelInput=(e,questionIndex)=>{
  let answer=e.target.value
  setSelectedAnswer((prev) => ({...prev,[questionIndex]:answer}))
  console.log(selectedAnswer);
  
 }

 const correction = () => {
  let newScore=0
  let arr=[]
  question.forEach((item, index) => {
    if (selectedAnswer[index] === item.correct_answer) {
      arr.push(`Question ${index + 1}: Correct`);
      newScore+=1
      
    } else {
      arr.push(`Question ${index + 1}: Incorrect the Correct Answer is ${item.correct_answer}`,);
    }
    setScore(newScore)
    setCorrectAswers(arr)
  });
};

  return (
    <>
   {loading?(
   <div className={`${style.spin}`}>
    <i className="fa-solid fa-clipboard-question fa-spin  text-danger fa-5x  "></i>
   </div>
   ):(


    <div className={`${style.Questions} Questions overflow-hidden`}>
    <div className="container">
      <div className="row pt-5 bg-white my-3 rounded-3 p-3" >
        <div className="col-md-12 m-auto text-center">
          <h2 className='text-danger'>Welcome to Questions Section</h2>

        </div>
        {question.map((item,index)=>(
           <div className="col-md-10 m-auto pt-5" key={index}>
           <h3>{index+1}  - {item.question}</h3>
           <div >
           <form  className='d-flex justify-content-between mt-3 px-5'>
                  {item.answers.map((answer, i) => (
                    <div key={i}>
                      <input type="radio" value={answer} name={`answer-${index}`}
                        onChange={(e) => handelInput(e,index)} />
                      <label htmlFor={`answer-${index}`} className='ms-2'>{answer}</label>
                    </div>
                  ))}
                 
                </form>

           </div>
         </div>

        ))}
         <button onClick={correction} className='btn btn-danger my-5'>submit</button>
        {score > 0 ?(
         <div className="col-md-10 text-success">
         <h3>your score is {score}</h3>
         {correctAswers.map((item,index)=>(
          <h5 key={index}>the Correct Answer is {item} </h5>

         ))}
         
        </div>
        ):null}
       
      </div>
     
    </div>
  </div>
   )}
      
    </>
  )
}
