import React,{useState} from 'react'
import { Link ,useHistory} from "react-router-dom"
import "./Login.css"
import {auth} from "./firebase";

function Login() {
    const history=useHistory();
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");

    const login = (event) =>{
        event.preventDefault();   //this stops the refresh !!!
        //to do login logic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //logged in ,redirect to homepage......
            history.push("/");
        })
        .catch((e) => alert(e.message));

    };

    const register = (event) =>{
        event.preventDefault();   //this stops the refresh !!!
        //to do register logic
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth =>{
            //create a user login ..... redirect to home page
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };


    return (
        <div className="login">
            <Link to="/">
                    <img className="login__logo"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-F9bJpA5krScy3Fd7J0GrxS2OB-NXW0z5t1UOOJo64W5Z4BhuMtqV9BlZ7zFR1z4c5A&usqp=CAU"
                        alt=""></img>
            </Link>
            <div className="login__container">
                
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"></input>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"></input>
                    <button type="submit" onClick={login} className="login__signInButton">Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>
                <button onClick={register} className="login__registerButton">Create your Amazon account </button>
            </div>
        </div>
    )
}

export default Login
