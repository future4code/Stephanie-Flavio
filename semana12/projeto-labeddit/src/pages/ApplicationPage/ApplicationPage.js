import React from 'react'
import { useHistory } from 'react-router';
import { Header } from '../../components/Header/Header';

export function ApplicationPage() {
  const history = useHistory()

  const goToPageLogin = () => {
    history.push('/login')
  }

  return (
    <div>
      <Header title={'Login'}/>
      Cadastro
      <button onClick={goToPageLogin}>Login</button>
    </div>
  );
}

