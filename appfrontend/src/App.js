import React from 'react';
import './App.css';
import {BrowserRouter as Router , Redirect, Route, Switch} from 'react-router-dom'
import Home from './screens/homeScreen/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Redirect from='/' to='/home'></Redirect>
          <Route exact path='/login'/>
          <Route exact path='/home' exact component={Home}/>
        </Switch>
    </Router>
  );
}

export default App;
