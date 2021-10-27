import { Button, Typography } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router';
import { HomeContainer } from './HomePageStyle';

export function HomePage() {

  const history = useHistory()

  const goToPageLogin = () => {
    history.push('/login')
  }

  return (
    <HomeContainer>
      <Typography 
        variant='h1'
        align={'center'}
        gutterBottom>
          Home
      </Typography>
      <Button 
        variant='outlined'
        color='primary'
        onClick={goToPageLogin}>Login</Button>
    </HomeContainer>
  );
}

