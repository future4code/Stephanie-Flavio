import React from "react";
import axios from "axios";
import Login from "./components/Login"
import Home from "./components/Home"

const headers = {
  headers: {
    Authorization: "stephanie-flavio-maryam"
  }
}

export default class App extends React.Component {
  state = {
    usersList: []
  }


  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    const url = ""
    axios.get(url, headers)
    .then((res) => {
       this.setState({usersList: res.data.result.list})
    })
    .catch((err) => {
      console.log(err.response)
    })
  }
  
  
  render() {
    const usersComponents = this.state.usersList.map((users) => {
      return <li>{users.name}</li>
    })

    return (
      <div>
        <h1>Funcionando</h1>
        {usersComponents}
      </div>
    )
  }
}

