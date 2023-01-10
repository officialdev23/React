import React from "react";
import Card from './Card';
import pic from './img/dark.jpg';

function App(){
    return(
        <> 
    <Card imgsrc= {pic}
    alt = 'myPic' 
    title = "A Netflix Original Series"
    sname = "Dark"
    link = 'https://www.netflix.com/in/title/80100172' />

<Card imgsrc= {pic}
    alt = 'myPic' 
    title = "A Netflix Original Series"
    sname = "Dark"
    link = 'https://www.netflix.com/in/title/80100172' />

<Card imgsrc= {pic}
    alt = 'myPic' 
    title = "A Netflix Original Series"
    sname = "Dark"
    link = 'https://www.netflix.com/in/title/80100172' />
  </>

    );
}

export default App;