import React from 'react'
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core'
import {ButtonContainer} from './HomePageStyled'
import { PageTitle } from '../../components/PageTitle';

export function HomePage () {
  const history = useHistory()

  const goToLoginPage = () => {
    history.push("/login")
  }

  const goToListTripsPage = () => {
    history.push("/trips/list")
  }

  return (
    <div>
      <PageTitle title={'LabeX'}/>
      <ButtonContainer>
        <Button
            variant={'contained'} 
            color={'primary'} 
            onClick={goToListTripsPage}>
                Ver Viagens
        </Button>
        <Button
            variant={'outlined'} 
            color={'secondary'} 
            onClick={goToLoginPage}>
                Login
        </Button>
      </ButtonContainer>
    </div>
  );
}