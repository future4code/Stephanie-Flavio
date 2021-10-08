import React, {useState} from 'react';
// import 'App.css'
import TelaInicial from './components/TelaInicial/TelaInicial';
import TelaMatches from './components/TelaMatches/TelaMatches';
import {Footer,  TextFooter, TelaPrincipal, Header } from './components/TelaInicial/styled'

const App = () => {
  const [telaAtual, setTelaAtual] = useState("inicial")

  const irParaInicial = () => {
    setTelaAtual("inicial")
  }

  const irParaMatches = () => {
    setTelaAtual("matches")
  }

  const mudarTela = () => {
    switch(telaAtual) {
      case "inicial":
        return <TelaInicial clicandoMatches={irParaMatches}/>
      case "matches":
        return <TelaMatches clicandoInicial={irParaInicial}/>
      default:
        return <div>"Erro! Essa página não existe."</div>
    }
  }

  return (
    <TelaPrincipal>
      <Header>
          <div>AstroMatch</div>
      </Header>
      <div>
        {mudarTela()}
      </div>
      <Footer>
          <TextFooter>Encontre seu par ideal.</TextFooter>
      </Footer>
    </TelaPrincipal>
  );
}

export default App;
