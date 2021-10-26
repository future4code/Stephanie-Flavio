import React from 'react'
import { useHistory } from 'react-router';

export function HomePage() {

  const history = useHistory()

  const goToPageLogin = () => {
    history.push('/login')
  }

  return (
    <div>
      Home
      <button onClick={goToPageLogin}>Login</button>
    </div>
  );
}

