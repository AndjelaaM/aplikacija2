import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './stranice/index';
import Contact from './stranice/contact';
import SignUp from './stranice/sign-up';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        
        <Route path='/home' component={Home} />
        <Route exact path= "/contact" component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
  
}

export default App;
