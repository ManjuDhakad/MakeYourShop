import React from 'react';
import './style/SignUp.css';

const SignUp = () => {
    return (
        <div className="loginBox">
            <div className="textbox">
                <input type="text" placeholder="Username" />
            </div>
            <div className="textbox">
                <input type="email" placeholder="Email" />
            </div>
            <div className="textbox">
                <input type="password" placeholder="Password" />
            </div>
            <button id="btn" value="Sign in" >SignUp</button>    
    </div>
    );
}

export default SignUp;
