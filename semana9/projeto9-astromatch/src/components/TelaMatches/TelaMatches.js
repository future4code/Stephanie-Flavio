import React, {useState, useEffect} from 'react'
import CardMatches from './CardMatches'
import { MatchesContainer, ListaMatches } from './styled'
import axios from 'axios'

const TelaMatches = (props) => {

    const [ListaDeMatches, setListaDeMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/stephanie-flavio-maryam/matches"
        axios.get(url)
        .then((res) => {
            setListaDeMatches(res.data.matches)
        })
        .catch((err) => {
            alert(err.data)
        })
    }

    const novaListaDeMatches = ListaDeMatches.map((pessoa) => {
        return(<CardMatches photo={pessoa.photo} name={pessoa.name}/>)
    })

    return (
        <div>
            <MatchesContainer>
                <ListaMatches>
                    {novaListaDeMatches}
                </ListaMatches>
            </MatchesContainer>
            <div>
                <button onClick={props.clicandoInicial}>Tela Inicial</button>
            </div>
        </div>
    )
}

export default TelaMatches
