import React from 'react'
import { useHistory } from 'react-router';
import { Header } from '../../components/Header/Header';

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
      <Header/>
      <div>
        Login
        <button onClick={goToPageFeed}>Entrar</button>
        <button onClick={goToPageApplication}>Cadastrar</button>
      </div>
    </div>
  );
}