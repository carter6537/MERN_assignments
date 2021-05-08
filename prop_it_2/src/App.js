import React, { Component } from 'react';
import './App.css';

import PersonCard from './components/PersonCard.js.js';

function App() {
  return (
    <div className="App">
      <PersonCard firstName='Carter' lastName='Ireland' age={19} hairColor='Brown'/>
      <PersonCard firstName='Addy' lastName='Ireland' age={17} hairColor='Brown'/>
      <PersonCard firstName='James' lastName='Ireland' age={49} hairColor='Brown'/>
      <PersonCard firstName='Michelle' lastName='Cargill' age={52} hairColor='Brown'/>
    </div>
  );
}

export default App;
