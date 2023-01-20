import React, {useState} from "react"
import "./register.css"

const Register = () =>{
    const[user, setUser] = useState({
        name : "",
        email : "",
        password : "",
        reEnterPassword : ""
    })

    const handleChange = e =>{
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    return(
        <div className="register">
            {console.log(user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter your name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter you Login Id/Email" onChange={handleChange}></input>
            <input type="Password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
            <input type="Password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter your password" onChange={handleChange}></input>
            <div className="button">Register</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
};

export default Register