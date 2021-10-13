import React from 'react'
import { useHistory } from 'react-router';

export function LoginPage() {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const goToAdminHomePage = () => {
    history.push("/admin")
  }

  return (
    <div>
        <h1>Login</h1>
        <button onClick={goBack}>Voltar</button>
        <input placeholder="E-mail"/>
        <input placeholder="Nome"/>
        <button onClick={goToAdminHomePage}>Enviar</button>
    </div>
  );
}