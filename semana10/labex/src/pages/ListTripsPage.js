import React from 'react'
import { useHistory } from 'react-router';
import styled from "styled-components"

const FormCard = styled.div`
display: flex;
justify-items: center;
border: 1px solid black;
width: 300px;
`

export function ListTripsPage() {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const gotToApplicationFormPage = () => {
    history.push("/form")
  }

  return (
    <div>
        <h1>Lista de Viagens</h1>
        <button onClick={goBack}>Voltar</button>
        <button onClick={gotToApplicationFormPage}>Inscrever-se</button>
        <FormCard>
            <form>
                <p>Nome:</p>
                <p>Descrição:</p>
                <p>Planeta:</p>
                <p>Duração:</p>
                <p>Data:</p>
            </form>
        </FormCard>
    </div>
  );
}