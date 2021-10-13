import React from 'react'
import { useHistory } from 'react-router';
import { CardsTrip } from './components/CardsTrip';

export function AdminHomePage() {

  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  const goToLoginPage = () => {
    history.push("/login")
  }

  const goToCreateTripPage = () => {
    history.push("/create")
  }

  return (
    <div>
        <header>
            <h1>Painel Administrativo</h1>
            <button onClick={goToHomePage}>Voltar</button>
            <button onClick={goToLoginPage}>Logout</button>
        </header>
        <CardsTrip/>
        <button onClick={goToCreateTripPage}>Criar Viagem</button>
    </div>
  );
}