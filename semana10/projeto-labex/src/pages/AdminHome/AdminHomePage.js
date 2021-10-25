import { Button } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router';
import { CardsTrip } from './components/CardsTrip';
import { CardsTripContainer } from './components/CardsTripStyled';
import { PageTitle } from '../../components/PageTitle';

export function AdminHomePage() {

  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  const goToLoginPage = () => {
    history.push("/login")
  }

  const goToCreateTripPage = () => {
    history.push("/admin/trips/:id")
  }

  return (
    <CardsTripContainer>
        <div>
          <PageTitle title={'Administração'}/>
          <Button 
            variant={'outlined'}
            onClick={goToCreateTripPage}>
              Criar Viagem
          </Button>
        </div>
        <div>
          <CardsTrip/>
          <Button 
            onClick={goToHomePage}>
              Voltar
          </Button>
          <Button 
            onClick={goToLoginPage}>
              Logout
          </Button>
        </div>
    </CardsTripContainer>
  );
}