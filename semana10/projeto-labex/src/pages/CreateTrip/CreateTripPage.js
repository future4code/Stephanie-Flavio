import { Button, TextField } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router';
import { PageTitle } from '../../components/PageTitle';
import { CreateTripForm } from './CreateTripStyled';

export function CreateTripPage() {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }
  return (
    <div>
        <PageTitle title={'Login'}/>
        <Button onClick={goBack}>Voltar</Button>
        <CreateTripForm>
          <TextField placeholder={'Nome'}/>
          <TextField placeholder={'Planeta'}/>
          <TextField placeholder={'Data'}/>
          <TextField placeholder={'Descrição'}/>
          <TextField placeholder={'Duração em dias'} type={'number'}/>
          <Button 
            variant={'contained'} 
            color={'primary'}
            type={'submit'}>
              Criar
          </Button>
        </CreateTripForm>
    </div>
  );
}