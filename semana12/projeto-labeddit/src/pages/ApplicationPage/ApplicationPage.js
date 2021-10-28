import { Button, TextField } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router';
import { Header } from '../../components/Header/Header';
import { Title } from '../../components/Title/Title';
import { goToHomePage } from '../../Routes/coordinator';
import { ApplicationForm } from './ApplicationPageStyle';

export function ApplicationPage() {
  const history = useHistory()

  return (
    <div>
      <Header goTo={() => goToHomePage(history)} title={'Login'}/>
      <Title title={'Cadastro'}/>
      <ApplicationForm>
        <TextField label={'Nome'} type={'text'}/>
        <TextField label={'Email'} type={'email'}/>
        <TextField label={'Senha'} type={'password'}/>
      <Button>Cadastrar</Button>
      </ApplicationForm>
    </div>
  );
}

