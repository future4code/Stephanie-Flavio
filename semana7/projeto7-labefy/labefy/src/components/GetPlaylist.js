import React from "react";
import styled from "styled-components";
import axios from "axios";

const PlaylistContainer = styled.div`
li {
    display: flex;
    justify-content: space-between;
    width: 150px;
}
`

const ButtonList = styled.button`
    :hover {
        background-color: red;
    }
`

const headers = {
    headers: {
      Authorization: "stephanie-flavio-maryam"
    }
  }

export default class GetPlaylist extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount () {
        this.getAllPlaylist()
    } 

    getAllPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, headers)
        .then((res) => {
            this.setState({playlists: res.data.result.list})
        })
        .catch((err) => {
            alert("Erro! Tente novamente.")
        })
    }

    deletePlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
        
        axios.delete(url, headers)
        .then((res) => {
            alert("Playlist deletada com sucesso!!")
            this.getAllPlaylist()
        })
        .catch((err) => {
            alert("Essa playlist já foi deletada.")
        })
    
    }

    render() {
        const playlistComponents = this.state.playlists.map((play) => {
            return (
            <PlaylistContainer>
                <li key={play.id}>
                    {play.name}
                    <ButtonList onClick={() => this.deletePlaylist(play.id)}>
                        x
                    </ButtonList>
                </li>
            </PlaylistContainer>
            )
        })
            
        return(
            <div>
                <button onClick={this.props.chooseDisplayCreate}>Criar Playlist</button>
                <hr/>
                {playlistComponents}
            </div>
        )
    }
}