import React from "react";
import "./homepage/homepage.css";

const Navbar =() =>{
    return(
        <>
            <nav className="content">
                    <div className="logo">
                        <a href="#"><span>GUIDING</span>ANGLES</a>

                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="http://localhost:3000/home">Home</a></li>
                            <li><a href="http://localhost:3000/test">Test</a></li>
                            <li><a href="http://localhost:3000/">Sign-Out</a></li>
                        </ul>
                    </div>
                    <div className="bt">
                        <a href="#">Find More</a>
                    </div>
                </nav>
        </>
    )
};

export default Navbar