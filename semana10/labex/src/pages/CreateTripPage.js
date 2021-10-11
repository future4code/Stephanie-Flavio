import React from 'react'

export default function CreateTripPage() {
  return (
    <div>
        <header>
            <h1>Criar Viagem</h1>
            <button>Voltar</button>
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
    </div>
  );
}