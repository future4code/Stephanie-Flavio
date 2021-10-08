import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { TelaInicialContainer, Perfil, ImagemPerfil} from './styled'

const TelaInicial = (props) => {
    
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfile()
    }, []) 

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/stephanie-flavio-maryam/person"
    
    const getProfile = () => {
        axios.get(url)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            alert(err.data)
        })
    }

    const clear = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/stephanie-flavio-maryam/clear"
        axios.put(url)
        .then((res) => {
            getProfile()
        })
        .catch((err) => {
            alert(err.response)
        })
    }

    const choosePerson = (idPessoa, choicePessoa) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/stephanie-flavio-maryam/choose-person"
        const body = {
            id: idPessoa,
            choice: choicePessoa
        }
        axios.post(url, body)
        .then((res) => {
            getProfile()
        })
        .catch((err) => {
            alert(err.response)
        })
    }

    return (
        <div>
            <TelaInicialContainer>
                {!profile ? <div>Aperte o botão 'Limpar matches'.</div> : 
                <Perfil>
                    <ImagemPerfil src={profile.photo}/>
                    <h2>{profile.name}, {profile.age}</h2>
                    <p>{profile.bio}</p>
                    <div>
                        <button onClick={() => choosePerson(profile.id, true)}>💚</button>
                        <button onClick={() => choosePerson(profile.id, false)}>❌</button>
                    </div>
                </Perfil>
                }
            </TelaInicialContainer>
            <button onClick={props.clicandoMatches}>Ir para Matches</button>
            <button onClick={clear}>Limpar Matches</button>
        </div>
    )
}

export default TelaInicial
