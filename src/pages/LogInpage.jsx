import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import { IoIosMail } from "react-icons/io";
// import { Form } from 'react-router-dom';
// import { Form } from 'react-bootstrap';

import { RiLock2Fill } from "react-icons/ri";
import '../index.css';
import favicon from '../assets/favicon (1).ico';

const LogInpage = () => {
const redirectTo = useNavigate();
  const processLogin = (event) => {
    event.preventDefault();
    
   redirectTo('/upload');
  };

  return (

    <div className='login-main-container'>
      

      <div className='login-left'>
        <div className='denso-brand'>
          <h1 className="denso-logo"> Denso </h1>
          <h6 className="denso-tagline">Crafting the Core</h6>
        </div>
        <h1 className="login-title">Auto Coding</h1>
        <footer className="login-footer">
          <p>
            &copy;Denso. All Rights Reserved.<br />
            Powered by Optimized Solutions Limited
            <img
              src={favicon}
              alt='icon'
              width={15}
              height={15}
              className='ms-2'
            />
          </p>
        </footer>
      </div>

  
      <div className="login-right">
        <div className="login-box">
          <h2 className="form-title">Log-In to Continue</h2>

          <div className="account-type">
            <p className="account-label">Sign-In to your Account</p>
            <label><input type="radio"  name='AccountType'/> DSC-ID</label>
            <label><input type='radio' name='AccountType' /> M365</label>
          </div>

          <form className="login-form" onSubmit={processLogin}>
            <InputField
              type="email"
             placeholder="administrator@denso.com"
              icon={<IoIosMail />}
            />
            <InputField
              // type="password"
              // for now i have not specied its type we will do it in future
             placeholder="******"
              icon={<RiLock2Fill />
}
            />
            <a href="#" className="forgot-password-link">Forgot Password?</a>
            <br />
            <div className="login-button-wrapper">
              <button type="submit" className="login-button">LogIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInpage;
