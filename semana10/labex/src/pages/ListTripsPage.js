import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router';
import styled from "styled-components"
import { useEffect, useState } from 'react';

const FormCard = styled.div`
display: flex;
flex-direction: column;
align-content: center;
/* justify-items: center; */
/* align-items: center; */
justify-content: center;
border: 1px solid black;
width: 600px;
height: 600px;
`

export function ListTripsPage() {

  const [trips, setTrips] = useState([])

  useEffect(() => {
    getTrips()
  }, [])

  const getTrips = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/stephanie-flavio-maryam/trips"
    axios.get(url)
    .then((res) => {
      setTrips(res.data.trips)
    })
    .catch((err) => {
      alert(err.response)
    })
  }

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const gotToApplicationFormPage = () => {
    history.push("/form")
  }

  const renderTrip = trips.map((trip) => {
    return(
      <div>
        <h2>{trip.name}</h2>
        <p>Descrição: {trip.description}</p>
        <p>Planeta: {trip.planet}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Data: {trip.date}</p>
      </div>
    )
  })
  return (
    <div>
        <h1>Lista de Viagens</h1>
        <button onClick={goBack}>Voltar</button>
        <button onClick={gotToApplicationFormPage}>Inscrever-se</button>
        <FormCard>
          {renderTrip}
        </FormCard>
    </div>
  );
}