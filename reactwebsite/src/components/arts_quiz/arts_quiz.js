import React from "react"
import "../homepage/homepage.css"
import { useState } from "react";
import Navbar from "../navbar"
import "../arts_quiz/arts_quiz.css"


const ArtsQuiz = () =>{

    var Questionbank = [
        {
            Question: "It may be said that _____ was the founder of modern historiography",
            AnswerText:[
                {Answer:"Voltaire" ,isCorrect: true},
                {Answer:"Rene Descartes" ,isCorrect: false},
                {Answer:"Leopold Ranke" ,isCorrect: false},
                {Answer:"Karl Marx" ,isCorrect: false}
            ]
        },
        {
            Question: "_____ saw the rise of Mathura school",
            AnswerText:[
                {Answer:"Kushana period" ,isCorrect: true},
                {Answer:"Gupta period" ,isCorrect: false},
                {Answer:"Rashtrakuta period" ,isCorrect: false},
                {Answer:"Maurya period" ,isCorrect: false}
            ]
        },
        {
            Question: "India's southernmost tip is known as _____",
            AnswerText:[
                {Answer:"Lakshadweep" ,isCorrect: false},
                {Answer:"Kanyakumari" ,isCorrect: false},
                {Answer:"Indira Point" ,isCorrect: true},
                {Answer:"Port Blair" ,isCorrect: false}
            ]
        },
        {
            Question: "India ranks _____ in population in the world.",
            AnswerText:[
                {Answer:"First" ,isCorrect: false},
                {Answer:"Second" ,isCorrect: true},
                {Answer:"Third" ,isCorrect: false},
                {Answer:"Seventh" ,isCorrect: false}
            ]
        },
        {
            Question: "Justice Party a non-brahmin movement was transformed into _____ a political party.",
            AnswerText:[
                {Answer:"Shiv Sena" ,isCorrect: false},
                {Answer:"J&K Nation Conference" ,isCorrect: false},
                {Answer:"Assam Gan Parishad" ,isCorrect: false},
                {Answer:"Dravid Munnetra Kazhgam" ,isCorrect: true}
            ]
        },
        {
            Question: "_____ is known as the 'Waterman of India'.",
            AnswerText:[
                {Answer:"Medha Patkar" ,isCorrect: false},
                {Answer:"Anna Hazare" ,isCorrect: false},
                {Answer:"Dr. Rajendrasinh Rana" ,isCorrect: true},
                {Answer:"Disha Ravi" ,isCorrect: false}
            ]
        },
        {
            Question: "The essence of democracy is _____",
            AnswerText:[
                {Answer:"Universal adult franchise" ,isCorrect: false},
                {Answer:"Judiicial decisions" ,isCorrect: false},
                {Answer:"Policy of reservations of seats" ,isCorrect: false},
                {Answer:"Decentralization of power" ,isCorrect: true}
            ]
        },
        {
            Question: "The first paper in english was started by",
            AnswerText:[
                {Answer:"John Marshal" ,isCorrect: false},
                {Answer:"James Augustus Hickey" ,isCorrect: true},
                {Answer:"Allen Hume" ,isCorrect: false},
                {Answer:"Balshastri Jambhekar" ,isCorrect: false}
            ]
        },
        {
            Question: "Rain forests of Brazil are known as _____.",
            AnswerText:[
                {Answer:"Roca" ,isCorrect: false},
                {Answer:"World coffee pot" ,isCorrect: false},
                {Answer:"Lungs of the world" ,isCorrect: true},
                {Answer:"Mediterranean forests" ,isCorrect: false}
            ]
        },
        {
            Question: "The outer core is made up of _____.",
            AnswerText:[
                {Answer:"Iron" ,isCorrect: true},
                {Answer:"Oxygen" ,isCorrect: false},
                {Answer:"Gold" ,isCorrect: false},
                {Answer:"Hydrogen" ,isCorrect: false}
            ]
        }
    ]

    /////usestate hooks

    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[score, setScore] = useState(0);
    const[showScore, setShowScore] = useState(false);

    const handleAnswerResponse = (isCorrect)=>
    {
        if(isCorrect)
        {
            setScore(score+1);
        }

        const nextQuestion = currentQuestion+1;

        if(nextQuestion<Questionbank.length)
        {
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowScore(true);
        }
    }

    const resetQuiz=()=>
    {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }
    console.log(Questionbank)
    return(
        <>
        <header>
            <Navbar/>
            {/* <Quiza/> */}
            <div className="app">
                {showScore?(
                    <div className="score-section">
                        <div className="sc">You have scored {score} out of {Questionbank.length}</div>
                        <>
                            <button type="submit" onClick={resetQuiz}>Click to take the test again</button>
                        </>
                    </div>
                ) : (
                    <>
                        <div className="question-section">
                            <div className="question-count">
                                <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>
                            <div className="question-text">
                                {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className="answer-section">
                            {Questionbank[currentQuestion].AnswerText.map((Answer)=>
                            (
                                <button onClick={()=>handleAnswerResponse(Answer.isCorrect)}>{Answer.Answer}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </header>

        
        </>
    )
};

export default ArtsQuiz;