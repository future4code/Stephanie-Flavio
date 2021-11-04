import { Button, TextField } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router';
import { Header } from '../../components/Header/Header';
import { Title } from '../../components/Title/Title';
import { useForm } from '../../hooks/useForm';
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';
import { singUp } from '../../requisition/users';
import { goToHomePage } from '../../Routes/coordinator';
import { ApplicationForm } from './ApplicationPageStyle';

export function ApplicationPage() {

  useUnprotectedPage()

  const history = useHistory()
  const [ form, onChange, clear] = useForm({ username: '', email: '', password: ''})

  const onSubmitForm = (e) => {
    e.preventDefault()
    singUp(form, clear, history)
  }

  return (
    <div>
      <Header goTo={() => goToHomePage(history)} title={'Login'}/>
      <Title title={'Cadastro'}/>
      <ApplicationForm onSubmit={onSubmitForm}>

        <TextField 
          label={'Nome'} 
          type={'text'}
          value={form.username}
          name={'username'}
          onChange={onChange}/>

        <TextField 
          label={'Email'} 
          type={'email'}
          value={form.email}
          name={'email'}
          onChange={onChange}/>

        <TextField 
          label={'Senha'} 
          type={'password'}
          value={form.password}
          name={'password'}
          onChange={onChange}/>

        <Button
          type={'submit'}>
            Cadastrar
        </Button>
      </ApplicationForm>
    </div>
  );
}

