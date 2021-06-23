import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import ToDo from './Screens/ToDo';
import Done from './Screens/Done';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ToDo} />
          <Route exact path="/done" component={Done} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
