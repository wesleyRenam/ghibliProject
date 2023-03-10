import React, { useContext } from 'react';
import LoginContext from '../context/LoginContext';
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
export default function Login () {

const { handleChange, password, email, showPassword, setShowPassword, remember, setRemember } = useContext(LoginContext);
const history = useHistory();

  return(
    <div className="bg-babyblue min-h-screen flex items-center justify-center flex-col">
      <form className="bg-gray w-96 px-5 py-9 rounded-xl shadow-lg flex items-center flex-col justify-center">
        <img src={require('../img/logogif.gif')} className='mb-4 w-50'/>
        <fieldset className='w-full flex items-center justify-center mt-2'>
          <input
            className='bg-stone-300 p-2 rounded-md w-full'
            type="email"
            name="email"
            placeholder='Email'
            required
            onChange={(e) => handleChange(e)}
          />
        </fieldset>
        <div  className='flex w-full text-red-500 '>
          {email.hasError && email.wasTouched && <small>{email.error}</small>}
        </div>
        <fieldset  className='w-full flex items-center relative justify-center mt-3'>
          <input
              type={showPassword ? 'text' : 'password'}
              className='bg-stone-300 p-2 min-w-full rounded-md '
              name="password"
              placeholder='Senha'
              required
              onChange={(e) => handleChange(e)}
            />
          <label htmlFor='checkbox1' className="cursor-pointer">
            <input 
              type="checkbox"
              id="checkbox1"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="absolute right-3 appearance-none"
            />
            <FontAwesomeIcon icon={ showPassword ? faEye : faEyeSlash} className="absolute right-4 top-3 w-5" />
          </label>
        </fieldset>
        <div  className='flex w-full text-red-500 '>
         {password.hasError && password.wasTouched && <small>{password.error}</small>}
        </div>
        <fieldset className='w-full flex justify-between mt-4 text-navyblue text-base'>
          <label className="flex items-center">
            <input 
                type="checkbox"
                name="remember"
                className="mr-2"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              /> 
              Lembre-me 
          </label> 
          <a href="#">Esqueceu a senha ?</a>
        </fieldset>
        <fieldset>
          <button
          className='p-2 rounded-md bg-ghibliblue w-80 mt-5 hover:scale-110 ease-in duration-300 hover:text-white '
           type="submit"
           onClick={() => history.push('/home')}
           >
            Entrar
          </button>
        </fieldset>
      </form>
    </div>
  )
};