import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GlobalStyles from './styles/global';

import Home from "./pages/Home";
import Brodti from "./pages/Brodti";
import NetPromoterScore from "./pages/NetPromoterScore";
import Puc from "./pages/Puc";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/brodti">
          <Brodti></Brodti>
        </Route>
        <Route path="/nps">
          <NetPromoterScore></NetPromoterScore>
        </Route>
        <Route path="/pucminas">
          <Puc></Puc>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
