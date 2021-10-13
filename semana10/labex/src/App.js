import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ListTripsPage } from './pages/ListTripsPage';
import { ApplicationFormPage } from './pages/ApplicationFormPage';
import { LoginPage } from './pages/LoginPage';
import { AdminHomePage } from './pages/AdminHomePage';
import { CreateTripPage } from './pages/CreateTripPage';
import { TripsDetailsPage } from './pages/TripsDetailsPage';
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path={"/"}>
      <HomePage/>
      </Route>

      <Route exact path={"/list"}>
      <ListTripsPage/>
      </Route>

      <Route exact path={"/form"}>
      <ApplicationFormPage/>
      </Route>

      <Route exact path={"/login"}>
      <LoginPage/>
      </Route>

      <Route exact path={"/admin"}>
      <AdminHomePage/>
      </Route>

      <Route exact path={"/create"}>
      <CreateTripPage/>
      </Route>

      <Route exact path={"/details"}>
      <TripsDetailsPage/>
      </Route>
    
    </Switch>
    </BrowserRouter>
  );
}

// {/* </Switch>
// </BrowserRouter> */}




// import styled from "styled-components"

// const FistPage = styled.div`
//   background-color: bisque;
//   height: 100px;
// `
// const Header = styled.header`
//   font-size: 40px;
// `


// {/* <div>
// {/* <FistPage>
//   <Header>
//     <h1>LabeX</h1>
//   </Header>
// </FistPage> */}
// </div> */}