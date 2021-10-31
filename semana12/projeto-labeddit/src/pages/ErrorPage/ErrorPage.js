import React from 'react'
import { Header } from '../../components/Header/Header';
import { ErrorPageContainer } from './ErrorPageStyle';
import nojinho from '../../image/nojinho.png'
import { Typography } from '@mui/material';
import { goToHomePage } from '../../Routes/coordinator';
import { useHistory } from 'react-router';

export function ErrorPage() {

  const history = useHistory()

  return (
    <div>
      <Header goTo={() => goToHomePage(history)}/>
      <ErrorPageContainer>
        <img src={nojinho} alt={'Imagem nojinho divertidamente'}/>
        <Typography variant={'h1'} align={'center'}>404 <br/> Page not found </Typography>
      </ErrorPageContainer>
    </div>
  );
}



