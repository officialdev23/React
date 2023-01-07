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
import React from 'react';
import ReactDOM from 'react-dom'; 

ReactDOM.render(
    <React.Fragment>
        <h1>Lets begin</h1>
        <p>This is a p  tag</p>
    </React.Fragment>
    ,document.getElementById('root'));