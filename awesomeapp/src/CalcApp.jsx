import React from "react";
import {add,sub,mul,div} from "./Calc";

function App()
{
    return(
        <>
        <ol>
            <li>The sum of two numbers is {add(40,4)}</li>
            <li>The difference of two numbers is {sub(40,4)}</li>
            <li>The multipliction of two numbers is {mul(40,4)}</li>
            <li>The division of two numbers is {div(40,4)}</li>
        </ol>
    </>
    );
}

export default App;