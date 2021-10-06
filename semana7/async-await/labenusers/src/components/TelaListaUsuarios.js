import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuarios = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

export default class TelaListaUsuarios extends React.Component{
    state = {
        usuarios: []
    }


    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "stephanie-flavio-maryam"
                }
            })
            this.setState({usuarios: res.data})

        } catch (err) {
            alert("Ocorreu um erro. Tente novamente!")
        }
    }
    

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "stephanie-flavio-maryam"
            }
        })
        .then((res) => {
            alert("Usuário deletado com sucesso!")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert("Ocorreu um erro. Tente novamente!")
        })
    }
    render(){
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuarios key={user.id}>
                    {user.name}
                    <button onClick={() => this.deletarUsuario(user.id)}>x</button>
                </CardUsuarios>
            )
        })




        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}