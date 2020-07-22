import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Resume from './components/Resume/Resume';
import Consults from './components/Consults/Consults';
import Billing from './components/Billing/Billing';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Resume/>
      <Consults/>
      <Billing/>
    </div>
  );
}

export default App;
