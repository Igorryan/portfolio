import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GlobalStyles from './styles/global';

import Home from "./pages/Home";
import Brodti from "./pages/Brodti";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/brodti" exact>
          <Brodti></Brodti>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
