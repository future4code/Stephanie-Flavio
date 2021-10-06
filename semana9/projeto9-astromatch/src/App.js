import React, {useState} from 'react';
import TelaInicial from './components/TelaInicial/TelaInicial';
import TelaMatches from './components/TelaMatches/TelaMatches';

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
    <div>
      {mudarTela()}
    </div>
  );
}

export default App;
