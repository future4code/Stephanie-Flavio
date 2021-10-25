import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router';
import { FormCard } from './ListTripsStyled';
import { useEffect, useState } from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Button } from '@material-ui/core';

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
    history.push("/trips/application")
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
        <PageTitle title={'Lista de Viagens'}/>
        <Button onClick={goBack}>Voltar</Button>
        <Button onClick={gotToApplicationFormPage}>Inscrever-se</Button>
        <FormCard>
          {renderTrip}
        </FormCard>
    </div>
  );
}