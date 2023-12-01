import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");



  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">

            { action === "Login" ? <div></div> : 
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Enter Name' />
                </div>
            }

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Enter E-mail' />
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Enter Password' />
            </div>
        </div>

        { action === "Sign Up" ? <div></div> : 
            <div className="forgot-password">Forgot Password?
                <span> Click Here</span>
            </div>
        }

        <div className="submit-container">
            <button className={action==="Login"?"submit active":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</button>
            <button className={action==="Sign Up"?"submit active":"submit"} onClick={() => {setAction("Login")}}>Login</button>
        </div>



    </div>
  )
}

export default LoginSignup