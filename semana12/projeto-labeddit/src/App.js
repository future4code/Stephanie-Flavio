import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {LoginPage} from './pages/LoginPage/LoginPage'
import {ApplicationPage} from './pages/ApplicationPage/ApplicationPage'
import {FeedPage} from './pages/FeedPage/FeedPage'
import {PostPage} from './pages/PostPage/PostPage'
import {HomePage} from './pages/HomePage/HomePage'
import {ErrorPage} from './pages/ErrorPage/ErrorPage'

function App() {
  return (
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

        <Route exact path={"/"}>
          <ErrorPage/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
