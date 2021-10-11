import React from 'react'

export default function ApplicationFormPage() {
  return (
    <div>
      <header>
        <h1>Inscreva-se para uma viagem</h1>
        <button>Voltar</button>
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