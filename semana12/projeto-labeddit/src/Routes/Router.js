import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {LoginPage} from '../pages/LoginPage/LoginPage'
import {ApplicationPage} from '../pages/ApplicationPage/ApplicationPage'
import {FeedPage} from '../pages/FeedPage/FeedPage'
import {PostPage} from '../pages/PostPage/PostPage'
import {HomePage} from '../pages/HomePage/HomePage'
import {ErrorPage} from '../pages/ErrorPage/ErrorPage'

export function Router () {
    return(
        <BrowserRouter>
        <Switch>
  
          <Route exact path={"/login"}>
            <LoginPage/>  
          </Route>
  
          <Route exact path={"/application"}>
            <ApplicationPage/>
          </Route>
  
          <Route exact path={"/feed"}>
            <FeedPage/>
          </Route>
  
          <Route exact path={"/post/:id"}>
            <PostPage/>
          </Route>
  
          <Route exact path={"/"}>
            <HomePage/>
          </Route>
  
          <Route>
            <ErrorPage/>
          </Route>
  
        </Switch>
      </BrowserRouter>
    )
}