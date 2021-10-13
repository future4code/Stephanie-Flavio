import React from 'react'
import { useHistory } from 'react-router';

export function ApplicationFormPage() {
  
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }
  return (
    <div>
      <header>
        <h1>Inscreva-se para uma viagem</h1>
        <button onClick={goBack}>Voltar</button>
      </header>
      <select>
        <option>Escolha uma Viagem</option>
        <option/>
      </select>
      <input placeholder="Nome"/>
      <input placeholder="Idade"/>
      <input placeholder="Texto de Candidatura"/>
      <input placeholder="Profissão"/>
      <select>
        <option>Escolha um País</option>
        <option/>
      </select>
      <button>Enviar</button>
    </div>
  );
}