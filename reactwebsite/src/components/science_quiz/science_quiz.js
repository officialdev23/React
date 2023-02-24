import React from "react"
import { useState } from "react"
import "../homepage/homepage.css"
import Navbar from "../navbar"
 import "../science_quiz/science_quiz.css"


const ScienceQuiz = () =>{
    var Questionbank = [
        {
            Question: "At which temperature do the reading of the centigrade and the fahrenheit scales coincide",
            AnswerText:[
                {Answer:"0 degree" ,isCorrect: false},
                {Answer:"-40 degree" ,isCorrect: false},
                {Answer:"100 degree" ,isCorrect: true},
                {Answer:"-80 degree" ,isCorrect: false}
            ]
        },
        {
            Question: "Sound travels fastest in ?",
            AnswerText:[
                {Answer:"Water" ,isCorrect: false},
                {Answer:"Steel" ,isCorrect: false},
                {Answer:"Alcohol" ,isCorrect: false},
                {Answer:"Air" ,isCorrect: true},
            ]
        },
        {
            Question: "Which of the following is used in the manufacturing of candel??",
            AnswerText:[
                {Answer:"Bees wax" ,isCorrect: false},
                {Answer:"Spermaceti wax" ,isCorrect: false},
                {Answer:"Lanodin wax" ,isCorrect: false},
                {Answer:"Paraffin wax" ,isCorrect: true}
            ]
        },
        {
            Question: "DNA differs from RNA in having?",
            AnswerText:[
                {Answer:"Uracil" ,isCorrect: true},
                {Answer:"Adenine" ,isCorrect: false},
                {Answer:"Thymine" ,isCorrect: false},
                {Answer:"Cytosine" ,isCorrect: false}
            ]
        },
        {
            Question: "Trachoma is disease of the?",
            AnswerText:[
                {Answer:"Skin" ,isCorrect: false},
                {Answer:"Eyes" ,isCorrect: true},
                {Answer:"Lungs" ,isCorrect: false},
                {Answer:"Ear" ,isCorrect: false}
            ]
        },
        {
            Question: "What is the name of the longest bone of thigh?",
            AnswerText:[
                {Answer:"Vistula" ,isCorrect: false},
                {Answer:"Femur" ,isCorrect: true},
                {Answer:"Fibula" ,isCorrect: false},
                {Answer:"Humerous" ,isCorrect: false}
            ]
        },
        {
            Question: "Brass gets discoloured in air because of the presence of which of the following gasses in air?",
            AnswerText:[
                {Answer:"Oxygen" ,isCorrect: false},
                {Answer:"Carbon dioxide" ,isCorrect: false},
                {Answer:"Hydrogen Sulphide" ,isCorrect: true},
                {Answer:"Nitrogen" ,isCorrect: false}
            ]
        },
        {
            Question: "Blood Pressure in humans is measured using?",
            AnswerText:[
                {Answer:"Sphygmomanometer" ,isCorrect: true},
                {Answer:"Thermometer" ,isCorrect: false},
                {Answer:"Anemometer" ,isCorrect: false},
                {Answer:"Anapesticmeter" ,isCorrect: false}
            ]
        },
        {
            Question: "Whis of the following is used in pencils?",
            AnswerText:[
                {Answer:"Graphite" ,isCorrect: true},
                {Answer:"Silicon" ,isCorrect: false},
                {Answer:"Charcoal" ,isCorrect: false},
                {Answer:"Phosphorous" ,isCorrect: false}
            ]
        },
        {
            Question: "How many chambers are present in human heart?",
            AnswerText:[
                {Answer:"One" ,isCorrect: false},
                {Answer:"Two" ,isCorrect: false},
                {Answer:"Three" ,isCorrect: false},
                {Answer:"Four" ,isCorrect: true}
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

export default ScienceQuiz;