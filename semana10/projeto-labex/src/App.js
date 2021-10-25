import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { ListTripsPage } from './pages/ListTrips/ListTripsPage';
import { ApplicationFormPage } from './pages/ApplicationForm/ApplicationFormPage';
import { LoginPage } from './pages/Login/LoginPage';
import { AdminHomePage } from './pages/AdminHome/AdminHomePage';
import { CreateTripPage } from './pages/CreateTrip/CreateTripPage';
import { TripsDetailsPage } from './pages/TripsDetails/TripsDetailsPage';
import './App.css';
import styled from 'styled-components';
import { CssBaseline } from '@material-ui/core'

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
` 

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <AppContainer>
        <Switch>
        <Route exact path={"/"}>
            <HomePage/>
          </Route>

          <Route exact path={"/trips/list"}>
            <ListTripsPage/>
          </Route>

          <Route exact path={"/trips/application"}>
            <ApplicationFormPage/>
          </Route>

          <Route exact path={"/login"}>
            <LoginPage/>
          </Route>

          <Route exact path={"/admin/trips/list"}>
            <AdminHomePage/>
          </Route>

          <Route exact path={"/admin/trips/create"}>
            <TripsDetailsPage/>
          </Route>
          
          <Route exact path={"/admin/trips/:id"}>
            <CreateTripPage/>
          </Route>

        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}
