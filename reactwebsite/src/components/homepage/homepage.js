import React from "react"
import "./homepage.css"
import { useNavigate } from "react-router-dom";

const Homepage = () =>{
    const navigate = useNavigate();
    return(
        <div className="homepage">
            <h1>This is homepage</h1>
            <div className="button" onClick={() => navigate('/login')}>Logout</div>
            <div>OR</div>
            <div className="button" onClick={() => navigate('/test')}>Take Test</div>
        </div>
    )
};

export default Homepage