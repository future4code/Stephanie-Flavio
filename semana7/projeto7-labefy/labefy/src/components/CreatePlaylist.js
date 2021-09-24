import React from "react";
// import styled from "styled-components";
import axios from "axios";


export default class CreatePlaylist extends React.Component {
    state = {
        playlistName: ""
    }
    

    createPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
          name: this.state.playlistName
        }
        const headers = {
            headers: {
              Authorization: "stephanie-flavio-maryam"
            }
        }
        axios.post(url, body, headers)
        .then((res) => {
          alert("Foi criada sua playlist com sucesso!")
          this.setState({playlistName: ""})
        })
        .catch((err) => {
          alert("Erro! Já existe essa playlist! Escolha outro nome.")
        })
    }

      
    handlePlaylistName = (e) => {
        this.setState({playlistName: e.target.value})
    }

    render() {
        return(
            <div>
                <button onClick={this.props.chooseDisplayList}>Lista de Playlist</button>
                <hr/>
                <h2>Crie sua Playlist:</h2>
                <input placeholder="Digite aqui"
                value={this.state.playlistName}
                onChange={this.handlePlaylistName}
                />
                <button onClick={this.createPlaylist}>Criar</button>
            </div>
        )
    }
}