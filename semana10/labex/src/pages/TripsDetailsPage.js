import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const useProtectedPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token === null){
      console.log('Não está logado!')
      history.push('/login')
    }
  }, )
}

export function TripsDetailsPage() {
  useProtectedPage()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/stephanie-flavio-maryam/trip/:id"
    const headers = {
      auth: token
    }
    axios.get(url, headers)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }, [])

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