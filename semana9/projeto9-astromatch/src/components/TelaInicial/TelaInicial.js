import React from 'react'
import { TelaInicialContainer, Perfil, ImagemPerfil } from './styled'

const TelaInicial = (props) => {
    
    const LimparMatches = () => {
        console.log("Esse botão vai limpar os matches.")
      }

    return (
        <div>
            <TelaInicialContainer>
                <Perfil>
                    <ImagemPerfil src={"https://picsum.photos/200/150"}/>
                    <h2>Stephanie</h2>
                    <p>Sou Stephanie mas não de Mônaco</p>
                    <div>
                        <button>💚</button>
                        <button>❌</button>
                    </div>
                </Perfil>
            </TelaInicialContainer>
            <button onClick={props.clicandoMatches}>Ir para Matches</button>
            <button onClick={LimparMatches}>Limpar Matches</button>
        </div>
    )
}

export default TelaInicial
