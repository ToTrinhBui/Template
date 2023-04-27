import React from "react";
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login">
            <div className="left">
                <img src={process.env.PUBLIC_URL + '/images/login.png'} alt="login" />
                <h4>Welcome my friend</h4>
                <p>Just a couple of clicks and we start</p>
            </div>
            <div className="right">
                <h2>Welcome</h2>
                <h1 style={{ color: '#3949AB' }}>Sign in here</h1>
                <div className="input-user">
                    <div className="input-part">
                        <img src={process.env.PUBLIC_URL + '/images/email.png'} alt="email"/>
                        <input placeholder="Email" type="text" />
                    </div>
                    <div className="input-part">
                    <img src={process.env.PUBLIC_URL + '/images/lock.png'} alt="password"/>
                        <input placeholder="Password" type="password" />
                    </div>
                </div>
                <button>Sign in</button>
                <p>Have no account yet? <Link to='/register'><span>Sign up</span></Link></p>
            </div>
        </div>
    )
}