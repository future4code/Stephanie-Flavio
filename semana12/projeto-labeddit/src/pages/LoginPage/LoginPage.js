import React from 'react'
import { useHistory } from 'react-router';

export function LoginPage() {

  const history = useHistory()

  const goToPageApplication = () => {
    history.push('/application')
  }

  const goToPageFeed = () => {
    history.push('/feed')
  }

  return (
    <div>
      Login
      <button onClick={goToPageFeed}>Entrar</button>
      <button onClick={goToPageApplication}>Cadastrar</button>
    </div>
  );
}