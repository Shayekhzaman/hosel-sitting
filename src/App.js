import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
            <Home></Home>
        </Route>

        <Route exact path="/">
        <Home></Home>

        </Route>



        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
