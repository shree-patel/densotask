import React from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from 'react';


const InputField = ({ type, placeholder, icon }) => {
    const [passwordShown, setIsPasswordShown] = useState(false);
  return (
    <div className="input-wrapper">
        <input 
        type={isPasswordShown ? 'text' : type}
        placeholder={placeholder}
        className="input-field"
        required

        />
        <i className="material-symbols-rounded">{icon}</i>
         {type === 'password' && (
        <i onClick={() => setIsPasswordShown(prevState => !prevState)} className="material-symbols-rounded eye-icon">
            {isPasswordShown ? <FaEyeSlash /> : <FaEye />}
        </i>
      )}

    </div>
  )
}

export default InputField