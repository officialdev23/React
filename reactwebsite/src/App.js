import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import Test from './components/test/test';
import {BrowserRouter, Route, Routes, } from "react-router-dom";
//import { useState } from 'react';
//import { BrowserRouter as Router, Switch, Route} from "react-router-dom" ;

function App() {

  //const [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Homepage/>}/>
          <Route path='/login' element = {<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
