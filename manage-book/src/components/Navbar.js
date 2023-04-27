import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <header >
                <Link to='/'><h3>Home</h3></Link>
                <div className="user">
                    <Link to='/login'><h3>Login</h3></Link>
                    <Link to='/register'><h3>Register</h3></Link>
                </div>
            </header>
        </>
    )
}