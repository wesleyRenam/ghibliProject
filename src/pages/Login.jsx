import React, { useContext } from 'react';
import LoginContext from '../context/LoginContext';
import { useHistory } from 'react-router-dom'

export default function Login () {

const { handleChange, password, email, showPassword, setShowPassword, remember, setRemember } = useContext(LoginContext);
const history = useHistory();

  return(
    <div className="bg-blue-300 min-h-screen flex items-center justify-center flex-col">
      <form className="bg-slate-200 w-96 p-3 rounded-xl shadow-lg flex items-center flex-col justify-center">
        <img src="https://w7.pngwing.com/pngs/866/176/png-transparent-ghibli-museum-dog-studio-ghibli-logo-totoro-studio-ghibli-angle-white-mammal.png" className='text-4xl m-1'/>
        <fieldset className='w-full flex items-center justify-center mt-2'>
          <input
            className='bg-stone-300 p-1 rounded-md w-full'
            type="email"
            name="email"
            placeholder='Email'
            required
            onChange={(e) => handleChange(e)}
          />
        </fieldset>
          {email.hasError && <small>{email.error}</small>}
        <fieldset  className='w-full flex items-center justify-center mt-2'>
          <input
              type={showPassword ? 'text' : 'password'}
              className='bg-stone-300 p-1 min-w-full rounded-md'
              name="password"
              placeholder='Senha'
              required
              onChange={(e) => handleChange(e)}
            />
            {password.hasError && <small>{password.error}</small>}
          <input 
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
        </fieldset>
        <fieldset>
          <label>
            <input 
                type="checkbox"
                name="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              /> 
              Me lembre 
          </label> 
          <a href="#">Esqueceu a Senha ?</a>
        </fieldset>
        <fieldset>
          <button
          className='p-2 rounded-md bg-blue-800 w-full '
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