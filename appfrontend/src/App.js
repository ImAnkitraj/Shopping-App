import React from 'react';
import './App.css';
import {Browserrouter as Router , Route, Switch} from 'react-router-dom-'
import Home from './screens/homeScreen/Home';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/login' component={}/>
          <Route path='/signup' component={}/>
        </Switch>
    </Router>
  );
}

export default App;
