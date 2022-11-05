import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GlobalStyles from './styles/global';

import Home from "./pages/Home";
import Loading from "./components/Loading"

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Loading />
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
