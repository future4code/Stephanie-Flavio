import React from 'react'
import { useHistory } from 'react-router';

export function ApplicationPage() {
  const history = useHistory()

  const goToPageLogin = () => {
    history.push('/login')
  }

  return (
    <div>
      Cadastro
      <button onClick={goToPageLogin}>Login</button>
    </div>
  );
}