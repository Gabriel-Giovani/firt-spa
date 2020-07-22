import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Resume from './components/Resume/Resume';
import Consults from './components/Consults/Consults';
import Billing from './components/Billing/Billing';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Switch>
              <Route path="/" exact component={ Resume }/>
              <Route path="/consults" component={ Consults }/>
              <Route path="/billing" component={ Billing }/>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
