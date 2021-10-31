import axios from 'axios';
import {BASE_URL} from '../constants/url'
import { goToFeedPage, goToLoginPage } from '../Routes/coordinator';

export const login = (body, clear, history) => {
    
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      clear()
      goToFeedPage(history)
    })
    .catch((err) => {
      alert(err.response.data)
    })
  }

  export const singUp = (body, clear, history) => {
    console.log(body)
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      clear()
      goToLoginPage(history)
      alert('Cadastrado com sucesso!')
    })
    .catch((err) => {
      alert(err.response.data)
    })
  }