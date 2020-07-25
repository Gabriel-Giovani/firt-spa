import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Resume from './components/Resume/Resume';
import Consults from './components/Consults/Consults';
import Billing from './components/Billing/Billing';
import NotFound from './components/NotFound/NotFound';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={ Resume } />
        <Route path="/consults" component={ Consults } />
        <Route path="/billing" component={ Billing } />
        <Route path="*" component={ NotFound }/>
      </Switch>
    </div>
  );
}

export default App;
