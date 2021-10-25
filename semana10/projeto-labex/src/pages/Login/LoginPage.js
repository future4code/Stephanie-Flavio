import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';
import {TextField, Button} from '@material-ui/core';
import { LoginForm } from './LoginStyled';
import { PageTitle } from '../../components/PageTitle';

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

  const onSubmitLogin = (e) => {
    e.preventDefault()
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
      alert('Email ou senha incorreto. Tente novamente!')
    })
  }


  const goBack = () => {
    history.goBack()
  }

  return (
    <div>
        <PageTitle title={'Login'}/>
        <Button onClick={goBack}>Voltar</Button>
        <LoginForm  onSubmit={onSubmitLogin}>
          <TextField 
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={onChangeEmail}
            required
          />
          <TextField
            placeholder="password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
          <Button
            variant={'contained'} 
            color={"primary"}
            type={'submit'}>
              Enviar
          </Button>
        </LoginForm>
    </div>
  );
}