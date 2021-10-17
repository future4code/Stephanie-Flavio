import { Button } from '@material-ui/core';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { PageTitle } from '../../components/PageTitle';
import { CandidateList } from './components/CandidateList';
import { TripInfo } from './components/TripInfoCard';
import { ContentContainer } from './TripsDetailsStyled';

const useProtectedPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token === null){
      console.log('Não está logado!')
      history.push()
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
      <PageTitle title={'Detalhes da Viagen'}/>
      <Button onClick={goBack}>Voltar</Button>
      <Button onClick={goToHomePage}>Home</Button>
      <ContentContainer>
        <TripInfo/>
        <CandidateList/>
      </ContentContainer>
    </div>
  );
}