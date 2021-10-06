import React from 'react'
import CardMatches from './CardMatches'

const TelaMatches = (props) => {
    return (
        <div>
            <CardMatches/>
            <button onClick={props.clicandoInicial}>Tela Inicial</button>
        </div>
    )
}

export default TelaMatches
