import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './Screens/Header';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <ToDo />

        </Switch>
      </Router>
    </>

  );
}

export default App;
