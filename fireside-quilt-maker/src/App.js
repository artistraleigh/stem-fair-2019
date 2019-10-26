import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import MakeYourBlock from './pages/MakeYourBlock';
import Quilt from './pages/Quilt';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <MakeYourBlock />
      </Route>
      <Route path="/quilt">
        <Quilt />
      </Route> 
    </Switch>
  </Router>
);

export default App;
