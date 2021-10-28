import { Button } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router';
import { Title } from '../../components/Title/Title';
import { HomeContainer } from './HomePageStyle';

export function HomePage() {

  const history = useHistory()

  const goToPageLogin = () => {
    history.push('/login')
  }

  return (
    <HomeContainer>
      <Title title={'Home'}/>
      <Button 
        variant='outlined'
        color='primary'
        onClick={goToPageLogin}>Login</Button>
    </HomeContainer>
  );
}

