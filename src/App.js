import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './stranice/pocetna';
import Contact from './stranice/contact';
import UlogujSe from './stranice/UlogujSe';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        
        <Route path='/home' component={Home} />
        <Route exact path= "/contact" component={Contact} />
        <Route path='/ulogujse' component={{UlogujSe}.openModal} />
      </Switch>
    </Router>
  );
  
}

export default App;
