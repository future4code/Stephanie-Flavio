import React from 'react'
import { useHistory } from 'react-router';

export function HomePage () {
  const history = useHistory()

  const goToLoginPage = () => {
    history.push("/login")
  }

  const goToListTripsPage = () => {
    history.push("/list")
  }

  return (
    <div>
      <button onClick={goToListTripsPage}>Ver Viagens</button>
      <button onClick={goToLoginPage}>Login</button>
    </div>
  );
}

