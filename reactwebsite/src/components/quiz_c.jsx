import React from "react"
import Logic from "./logic_c"
import "./quiz.css"


const Quiz = () =>{



    return(
        <>
            <div className="main-div">
                <div className="inner-div">
                    <h2 className="question">Question goes here</h2>
                    <ul>
                        <li>
                            <input type="radio" name="answer" id="ans1" className="answer"/> 
                            <label htmlFor="ans1" id="option1"> answer options</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="ans2" className="answer"/> 
                            <label htmlFor="ans2" id="option2"> answer options</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="ans3" className="answer"/> 
                            <label htmlFor="ans3" id="option3"> answer options</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="ans4" className="answer"/> 
                            <label htmlFor="ans4" id="option4"> answer options</label>
                        </li>
                    </ul>
                    <button id="submit" className="sub_btn">Submit</button>
                    <div id="showScore" className="scoreArea"></div>
                </div>
            </div>
            <Logic/>
        </>
    )
}

export default Quiz;