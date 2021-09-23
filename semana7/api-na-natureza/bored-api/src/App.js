import React from "react"
import styled from "styled-components"
import axios from "axios"

const GetEntediado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


export default class App extends React.Component {

  state = {
    activity: {}
  }

  getActivities = () => {
    const url = "http://www.boredapi.com/api/activity/"
    axios.get(url)
      .then((res) => {
        this.setState({activity: res.data})
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente!")
      })
  }


  render(){
    return (
      <div>
        <GetEntediado>
          <h1>Está entendiado?</h1>
          <button onClick={this.getActivities}>Clique aqui!</button>
        </GetEntediado>
        <hr/>
        <GetEntediado>
          <h2>Atividade</h2>
          <p>Nome: {this.state.activity.activity}</p>
          <p>Tipo: {this.state.activity.type}</p>
          <p>Participantes: {this.state.activity.participants}</p>
          <p>Preço: ${this.state.activity.price}</p>
        </GetEntediado>
      </div>
    );
  }
}


