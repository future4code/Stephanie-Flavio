import React from 'react'
import styled from "styled-components"

const FormCard = styled.div`
display: flex;
justify-items: center;
justify-content: center;
border: 1px solid black;
`

export default function ListTripsPage() {
  return (
    <div>
        <h1>Lista de Viagens</h1>
        <button>Voltar</button>
        <button>Inscrever-se</button>
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