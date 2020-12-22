import React from 'react';
import './style/SignIn.css';

const SignIn = () => {
    return (
        <div className="loginBox">
            <div className="textbox">
                <input type="email" placeholder="Email" />
            </div>
            <div className="textbox">
                <input type="password" placeholder="Password" />
            </div>
            <button id="btn" value="Sign in" >SignIn</button>    
    </div>
    );
}

export default SignIn;
