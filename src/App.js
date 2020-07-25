import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Resume from './components/Resume/Resume';
import Consults from './components/Consults/Consults';
import Billing from './components/Billing/Billing';
<<<<<<< HEAD
import NotFound from './components/NotFound/NotFound';
import { Switch, Route } from 'react-router-dom'
=======
import { Switch, Route } from 'react-router-dom';
>>>>>>> b323820dcf914405238226dcfa239d6e46e0cd7d

function App() {
  return (
    <div className="App">
      <Navbar/>
<<<<<<< HEAD
      <Switch>
        <Route path="/" exact component={ Resume } />
        <Route path="/consults" component={ Consults } />
        <Route path="/billing" component={ Billing } />
        <Route path="*" component={ NotFound }/>
      </Switch>
=======
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
>>>>>>> b323820dcf914405238226dcfa239d6e46e0cd7d
    </div>
  );
}

export default App;
