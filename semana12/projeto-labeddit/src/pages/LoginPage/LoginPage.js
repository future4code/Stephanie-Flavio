import { Button, TextField } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router';
import { Header } from '../../components/Header/Header';
import { Title } from '../../components/Title/Title';
import { goToHomePage, goToApplicationPage } from '../../Routes/coordinator';
import { LoginForm } from './LoginPageStyle';
import {useForm} from '../../hooks/useForm'
import { login } from '../../requisition/users';
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';


export function LoginPage() {

  useUnprotectedPage()

  const [form, onChange, clear] = useForm({email: '', password: ''})

  const history = useHistory()

  const onSubmitForm = (e) => {
    e.preventDefault()
    login(form, clear, history)
  }

  return (
    <div>
      <Header goTo={() => goToHomePage(history)}/>
      <div>
        <Title title={'Login'}/>
        <LoginForm onSubmit={onSubmitForm}>

          <TextField 
            name={'email'}
            label={'Email'} 
            type={'email'}
            value={form.email}
            onChange={onChange}
            required/>

          <TextField 
            name={'password'}
            label={'Senha'} 
            type={'password'}
            value={form.password}
            onChange={onChange}
            required/>

          <Button 
            type={'submit'} 
            variant={'contained'}
            color={'primary'}>
              Entrar
            </Button>
          <Button onClick={() => goToApplicationPage(history)}>Não possue conta? Cadastre-se</Button>

        </LoginForm>
      </div>
    </div>
  );
}