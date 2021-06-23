import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import store from './redux/stores/configureStore';
import ToDo from './Screens/ToDo';
import Done from './Screens/Done';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ToDo} />
          <Route exact path="/done" component={Done} />
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
