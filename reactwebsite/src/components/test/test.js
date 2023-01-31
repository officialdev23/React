import React from "react"
import "./test.css"
import { useNavigate } from "react-router-dom";

const Test = () =>{
    const navigate = useNavigate();
    return(
        <div className="container">
            <div className="box">
                <p>Test 1</p>
                <div className="btn" onClick={() => navigate('/login')}>Proceed</div>
            </div>
            <div className="box">Test 2</div>
            <div className="box">Test 3</div>
            <div className="box">Analysis Scale</div>
        </div>
    )
};

export default Test