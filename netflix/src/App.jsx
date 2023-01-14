import React from "react";
import Card from './Card';
import pic from './img/dark.jpg';
import Sdata from "./Sdata";
//import pic1 from  './img/flower.jpg'
console.log(Sdata[0].sname);

function App(){
    return(
        <> 
        <h1 className="heading_style">Top React Series</h1>
    <Card imgsrc= {pic}
    alt = {Sdata[0].alt} 
    title = {Sdata[0].title}
    sname = {Sdata[0].sname}
    link = {Sdata[0].sname} />

    <Card imgsrc= {pic}
    alt = {Sdata[1].alt} 
    title = {Sdata[1].title}
    sname = {Sdata[1].sname}
    link = {Sdata[1].sname} />

    <Card imgsrc= {pic}
    alt = {Sdata[2].alt} 
    title = {Sdata[2].title}
    sname = {Sdata[2].sname}
    link = {Sdata[2].sname} />
  </>

    );
}

export default App;