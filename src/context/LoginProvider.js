/* eslint-disable react/prop-types */
import { useMemo, useState } from 'react';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {

const [email, setEmail] = useState({
    value: '',
    error: '',
    hasError: '',
    wasTouched: '',
});

const [password, setPassword] = useState({
  value: '',
  error: '',
  hasError: '',
  wasTouched: '',
});

const [showPassword, setShowPassword] = useState(false)
const [remember, setRemember] = useState(false)
const [dark, setDark] = useState(false)
const [hideSearch, setHideSearch] = useState(true);

const validationEmail = (email) => {
  const emailRegex = /^(.+)@(.+)$/;
  return emailRegex.test(email);
}

const validatePass = (pass) => {
  return (pass.length < 6)
}
const validateTouched = (touch) => {
  return(touch.length === 0)
}

const handleChange = (event) => {
  const { name, value } = event.target;
  if(name === 'email') {
    const validEmail = validationEmail(value);
    const touch = validateTouched(value)
    setEmail({
      value,
      error: !validEmail ? 'Insira um email valido' :  '',
      hasError: !validEmail,
      wasTouched: !touch,
    })
  } else if (name === 'password') {
    const validPass = validatePass(value);
    const touch = validateTouched(value)
    setPassword({
      value,
      error: validPass ? 'A senha tem que ter pelo menos 6 caracteres' :  '',
      hasError: validPass,
      wasTouched: !touch,
    })
  }
}

  const values = useMemo(() => ({
    password, email, dark, setDark, showPassword, setShowPassword, remember, setRemember, handleChange, hideSearch, setHideSearch
  }), [password, email, dark, setDark, showPassword, setShowPassword, remember, setRemember, hideSearch, setHideSearch]);

  return (
    <LoginContext.Provider value={ values }>
      { children }
    </LoginContext.Provider>
  );
}

export default LoginProvider;
