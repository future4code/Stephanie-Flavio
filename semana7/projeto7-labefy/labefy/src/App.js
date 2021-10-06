import React from "react";
import CreatePlaylist from "./components/CreatePlaylist";
import GetPlaylist from "./components/GetPlaylist";


export default class App extends React.Component {
  state = {
    homePlaylist: "create",
  }

  changeDisplay = () => {
    switch (this.state.homePlaylist){
      case "create":
        return <CreatePlaylist chooseDisplayList={this.chooseDisplayList}/>
      case "list":
        return <GetPlaylist chooseDisplayCreate={this.chooseDisplayCreate}/>
      default: 
        return <div>Erro! Página não encontrada.</div>
    }
  }

  chooseDisplayCreate = () => {
    this.setState({homePlaylist: "create"})
  }

  chooseDisplayList = () => {
    this.setState({homePlaylist: "list"})
  }

  render() {
    return (
      <div>
        <h1>Labefy</h1>
        {this.changeDisplay()}
      </div>
    );
  }
}

