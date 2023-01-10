//Part 5
/*var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'))*/

//Part 6 jsx
/*import React from 'react'
import ReactDOM  from 'react-dom'

ReactDOM.render(<h1>Lets Start</h1>,document.getElementById('root'));*/

//part 7 multiple Render
/*import React from 'react';
import ReactDOM from 'react-dom'; 

ReactDOM.render(
    <div>
        <h1>Lets begin</h1>
        <p>This is a p  tag</p>
    </div>
    ,document.getElementById('root'));*/

// Part 8 react fragments
/* import React from 'react';
import ReactDOM from 'react-dom'; 

ReactDOM.render(
    <React.Fragment>
        <h1>Lets begin</h1>
        <p>This is a p  tag</p>
    </React.Fragment>
    ,document.getElementById('root'));*/

//JSX Expressions
/*import React from "react";
import ReactDOM from "react-dom"

const name = "aryan";

ReactDOM.render(
    <h1>My name is {name}</h1>,
    document.getElementById('root')
);*/

// part 11 JSX literals
/*import React from "react";
import ReactDOM  from "react-dom";

const name = "aryan";
const lname = "Shirodkar"
//console.log(`my name is ${name}`);

ReactDOM.render(
    <h1>{`My name is ${name} ${lname}`}</h1>,
    document.getElementById('root')
);*/

//part 13 jsx attribute
/*import React from "react";
import ReactDOM from "react-dom";

const name = "aryan";

ReactDOM.render(
    <>
    <h1 contentEditable="true">my name is {name}</h1>
    <img src="http://via.placeholder.com/640x360" alt="React"/> 
    <img src="http://via.placeholder.com/360x360" alt="React"/> 
    </>,
    document.getElementById("root")
);*/

//part 14 using css

/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "aryan";

ReactDOM.render(
    <>
    <h1 style={{textAlign : 'center', color : 'red', textTransform : 'uppercase '}}>my name is {name}</h1>
    <img src="http://via.placeholder.com/640x360" alt="React"/> 
    <img src="http://via.placeholder.com/360x360" alt="React"/> 
    </>,
    document.getElementById("root")
); */


//part 17 mini task 3

/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let curDate = new Date().getHours();
let wish = '';
const cssStyle = { }

if(curDate>=1 && curDate<12)
{
    wish = "Good Morning";
    cssStyle.color = "red";
}
else if(curDate>=12 && curDate<19)
{
    wish = "Good Afternoon";
    cssStyle.color = "blue";
}
else
{
    wish = "Good Night";
    cssStyle.color = "blue";
}
ReactDOM.render(
    <>
        <div className="outer">
            <div className="inner">
                <h1>Hello Sir, <span style={cssStyle}> {wish} </span></h1>
            </div>
        </div>
        <h1>Hello</h1>
    </>,
    document.getElementById('root')
);*/

// part 18  Functional Component
/*import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

ReactDOM.render(
    <>
        <App/>
    </>,
    document.getElementById('root')
);*/

//part 21 import and export challenge
/*import React from "react";
import ReactDom from "react-dom";
import App from "./CalcApp";

ReactDom.render(
   <App/>,
    document.getElementById('root')
);*/