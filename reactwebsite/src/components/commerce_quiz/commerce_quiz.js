import React from "react"
import { useState } from "react"
import "../homepage/homepage.css"
import Navbar from "../navbar"
import "../commerce_quiz/commerce_quiz.css"


const CommerceQuiz = () =>{
    var Questionbank = [
        {
            Question: "For development people look at a mix of _____",
            AnswerText:[
                {Answer:"Goals" ,isCorrect: true},
                {Answer:"Responsibilities" ,isCorrect: false},
                {Answer:"Accountability" ,isCorrect: false},
                {Answer:"None of the above" ,isCorrect: false}
            ]
        },
        {
            Question: "For comparison between, total income is not such a useful measure. State whether true or false.",
            AnswerText:[
                {Answer:"True" ,isCorrect: true},
                {Answer:"False" ,isCorrect: false}
            ]
        },
        {
            Question: "Among the following states, _____ has the the highest per capita income as per 2012-13?",
            AnswerText:[
                {Answer:"Maharashtra" ,isCorrect: true},
                {Answer:"Bihar" ,isCorrect: false},
                {Answer:"Kerala" ,isCorrect: false},
                {Answer:"Jharkhand" ,isCorrect: false}
            ]
        },
        {
            Question: "Which of the following statements about money are true?",
            AnswerText:[
                {Answer:"Money cannot buy a pollution-free environment" ,isCorrect: false},
                {Answer:"Money cannot ensure that you get unadulterated medicines" ,isCorrect: false},
                {Answer:"Money cannot protect you from infectious medicines" ,isCorrect: false},
                {Answer:"All of the above" ,isCorrect: true}
            ]
        },
        {
            Question: "Among the following South Asian countries, _____ had the highest life expectency at birth.",
            AnswerText:[
                {Answer:"Myanmar" ,isCorrect: false},
                {Answer:"Sri Lanka" ,isCorrect: true},
                {Answer:"Nepal" ,isCorrect: false},
                {Answer:"India" ,isCorrect: false}
            ]
        },
        {
            Question: "In addition to income people want _____ for development.",
            AnswerText:[
                {Answer:"Freedom" ,isCorrect: false},
                {Answer:"Security" ,isCorrect: false},
                {Answer:"Equal treatment" ,isCorrect: false},
                {Answer:"All of these" ,isCorrect: true}
            ]
        },
        {
            Question: "The first complete Indian Bank was established in which year",
            AnswerText:[
                {Answer:"1794" ,isCorrect: false},
                {Answer:"1894" ,isCorrect: true},
                {Answer:"1896" ,isCorrect: false},
                {Answer:"1902" ,isCorrect: false}
            ]
        },
        {
            Question: "What is the full form of GST",
            AnswerText:[
                {Answer:"Goods and Supply Tax" ,isCorrect: false},
                {Answer:"Goods and Service Tax" ,isCorrect: true},
                {Answer:"General Service Tax" ,isCorrect: false},
                {Answer:"Government Sales Tax" ,isCorrect: false}
            ]
        },
        {
            Question: "GST was implemented in India from _____.",
            AnswerText:[
                {Answer:"1st January 2017" ,isCorrect: false},
                {Answer:"1st April 2017" ,isCorrect: false},
                {Answer:"1st March 2017" ,isCorrect: false},
                {Answer:"1st July 2017" ,isCorrect: true}
            ]
        },
        {
            Question: "What does I in IGST stands from.",
            AnswerText:[
                {Answer:"Internal" ,isCorrect: false},
                {Answer:"Integrated" ,isCorrect: true},
                {Answer:"International" ,isCorrect: false},
                {Answer:"Intra" ,isCorrect: false}
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
                            <button type="submit" onClick={resetQuiz}>Click to play again</button>
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

export default CommerceQuiz;