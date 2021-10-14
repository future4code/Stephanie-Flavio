import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';

export function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  const onChangeEmail= (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword= (e) => {
    setPassword(e.target.value)
  }

  const onSubmitLogin = () => {
    console.log(email, password)

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/stephanie-flavio-maryam/login"
    const body = {
      email: email,
      password: password
    }

    axios.post(url, body)
    .then((res) => {
      console.log(res.data)
      localStorage.setItem('token', res.data.token)
      history.push("/")
    })
    .catch((err) => {
      console.log(err.data)
    })
  }


  const goBack = () => {
    history.goBack()
  }

  return (
    <div>
        <h1>Login</h1>
        <button onClick={goBack}>Voltar</button>
        <input 
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <button onClick={onSubmitLogin}>Enviar</button>
    </div>
  );
}