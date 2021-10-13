import React from 'react'
import { useHistory } from 'react-router';

export function CreateTripPage() {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }
  return (
    <div>
        <header>
            <h1>Criar Viagem</h1>
            <button onClick={goBack}>Voltar</button>
        </header>
        <input placeholder="Nome"/>
        <select>
            <option>Escolha um Planeta</option>
            <option/>
        </select>
        <selec>
            <option>Data</option>
        </selec>
        <input placeholder="Descrição"/>
        <input placeholder="Duração de dias"/>
        <button>Criar</button>
    </div>
  );
}