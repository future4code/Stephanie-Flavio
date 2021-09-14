import React from "react";
import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

export default class App extends React.Component {
  state = {
    etapa: 1
  };

  proximaEtapa = () => {
    if (this.state.etapa < 4) {
      this.setState({ etapa: this.state.etapa + 1 });
    } 
    console.log(this.state.etapa)
  };

  renderiza = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <h3>Seção inexistente</h3>;
    }
  };

  render () {
   return (
    <div>
      {this.renderiza()}
      <button onClick={this.proximaEtapa}>Próxima etapa</button>
    </div>
    );
  }
}