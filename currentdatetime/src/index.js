import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const name = "Aryan Shirodkar"
const currdate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();
//const currtime = new Tim
ReactDOM.render(
  <>
  <div class="outer-card">
    <div class="card">
      <h1>
        {`My name is ${name}`} 
     </h1>
      <p><b>
        {`Current Date is: ${currdate}`}</b>
     </p>
      <p>
        <b>{`Current Date is: ${currtime}`}</b>
      </p>
    </div>
  </div>
  
  </>,
  document.getElementById('root')
);