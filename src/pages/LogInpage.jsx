import React from 'react'
import InputField from '../components/InputField'
import { IoMail } from "react-icons/io5";
import { IoIosUnlock } from "react-icons/io";

const LogInpage = () => {
  return (
    <div className="login-container">
        <h1 className="form-title">LogIn to Continue</h1>

        <form action="#" className="login-form">
            <InputField type="email" placeholder="Email address" icon={<IoMail />}/>
                    <InputField type="password" placeholder="Password" icon={<IoIosUnlock />} />
        </form>
        
    </div>
  )
}

export default LogInpage