
import { use } from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const InputField = ({type,icon,placeholder}) => {
  const [passwordShown, setPasswordShown] = useState(true);

  const isPassword= type==='password';
return (
    <div className="custom-input-wrapper">
      {icon && <span className='input-icon'>{icon}</span>}

      <input
      type={isPassword&& passwordShown? 'text' : type}
      placeholder={placeholder}
      className="custom-input-field"
      required
 />

 {isPassword &&(
  <span
         className='password-toggle-icon'
         onClick={() => setPasswordShown(p => !p)}  
        >
          {passwordShown ? <FaEyeSlash /> : <FaEye />}
        </span>
 )}
    </div>
  )
}

export default InputField