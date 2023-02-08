import React from "react";
import Navbar from "../navbar"
import "../homepage/homepage.css"
import "./analysis.css"

const Analysis = () =>{
    return(
        <header>
            <Navbar/>
            <div className="table-container">
            <table className="blueTable">
                <thead>
                <tr>
                    <th>Stream</th>
                    <th>Score 0-5</th>
                    <th>Score 6-7</th>
                    <th>Score 8-10</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Science</td>
                    <td>The student will face <br/>tough time in studies </td>
                    <td>It can be said that it <br/>is a worth trying field for the student</td>
                    <td>It will be an excellent <br/>field for the student</td>
                </tr>
                <tr>
                    <td>Commerce</td>
                    <td>The field can be said to <br/>ok for the student</td>
                    <td>If student pays attention<br/> he can prosper goodly</td>
                    <td>The student can have excellet<br/> future if studied properly</td>
                </tr>
                <tr>
                    <td>Arts</td>
                    <td>Student should work hard</td>
                    <td>An ideal field for the student</td>
                    <td>Student can achieve great heights through this field</td>
                </tr>
                </tbody>
            </table>
            </div>
        </header>
        
    );
}

export default Analysis;