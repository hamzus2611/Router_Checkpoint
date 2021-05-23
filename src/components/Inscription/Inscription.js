import React, { useState } from 'react'
import ReactDOM from "react-dom";

import "./Inscription.css"
function Inscription() {
    const [btns, setBtns] = useState([
        {   id:1,
            isclick:true,
        },
        {    id:2,
            isclick:false,
        },])
    
    const handelClick=(ids)=>{
            setBtns(btns.map((todo)=>({...todo ,isclick:!todo.isclick})))
            
        };
          
    
    const colorchange=(ids)=>{
        btns.map((todo)=>(todo.id===ids&&todo.isclick?
            container.classList.remove("right-panel-active")
            :container.classList.add("right-panel-active")))
    }
    
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container1');
    
    // signUpButton.addEventListener('click', () => {
    //     container.classList.add("right-panel-active");
    // });
    
    // signInButton.addEventListener('click', () => {
    //     container.classList.remove("right-panel-active");
    // });
    return (
        <div style={{ textAlign: "center" }} className="inscr">
            <div className="container1" id="container1">
                <div className="form-container1 sign-up-container1">
                    <form action="#">
                        <h1 className="insch1">Create Account</h1>
                        <div className="social-container1">
                            <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                        </div>
                        <span className="inspan">or use your email for registration</span>
                        <input className="input1" type="text" placeholder="Name" />
                        <input className="input1" type="email" placeholder="Email" />
                        <input className="input1" type="password" placeholder="Password" />
                        <button className="button1">Sign Up</button>
                    </form>
                </div>
                <div className="form-container1 sign-in-container1">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container1">
                            <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                        </div>
                        <span className="inspan">or use your account</span>
                        <input className="input1" type="email" placeholder="Email" />
                        <input className="input1" type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button className="button1">Sign In</button>
                    </form>
                </div>
                <div className="overlay1-container1">
                    <div className="overlay1">
                        <div className="overlay1-panel overlay1-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <p>Unlimited movies, TV shows and more.</p>
                            <button className="button1 ghost" id="signIp" onClick={() => handelClick()+colorchange(2)} > Sign In</button>
                        </div>
                        <div className="overlay1-panel overlay1-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button  className="button1 ghost" id="signUp" onClick={() => handelClick()+colorchange(1)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    );
    }


export default Inscription