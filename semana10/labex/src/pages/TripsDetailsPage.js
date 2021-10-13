import React from 'react'
import { useHistory } from 'react-router';

export function TripsDetailsPage() {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const goToHomePage = () => {
    history.push("/")
  }
  return (
    <div>
      <h1>Detalhes da Viagem</h1>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToHomePage}>Home</button>
    </div>
  );
}