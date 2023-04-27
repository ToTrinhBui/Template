import React, {useState} from "react";
import { Link } from 'react-router-dom';

export default function Register() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
        } else {
            // Perform sign-in logic
        }
    };

    return (
        <div>
            <div className="login">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + '/images/login.png'} alt="login" />
                    <h4>Welcome my friend</h4>
                    <p>Just a couple of clicks and we start</p>
                </div>
                <div className="right">
                    <h2>Welcome</h2>
                    <h1 style={{ color: "#3949AB" }}>Create an account</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-user">
                            <div className="input-part">
                                <img src={process.env.PUBLIC_URL + "/images/email.png"} alt="email" />
                                <input placeholder="Email" type="text" />
                            </div>
                            <div className="input-part">
                                <img src={process.env.PUBLIC_URL + "/images/lock.png"} alt="password" />
                                <input
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                            <div className="input-part">
                                <img src={process.env.PUBLIC_URL + "/images/lock.png"} alt="confirm password" />
                                <input
                                    placeholder="Confirm Password"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit">Sign up</button>
                    </form>
                    <p>
                        Already have an account? <Link to="/login"><span>Sign in</span></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}