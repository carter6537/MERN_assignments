import React, { Component } from 'react';
import './App.css';

import MyComponent from './components/MyComponent';

function App() {

  return (
    <div className="App">
      <MyComponent firstName='Carter' lastName='Ireland' age='19' hairColor='Brown'/>
      <MyComponent firstName='Addy' lastName='Ireland' age='17' hairColor='Brown'/>
      <MyComponent firstName='James' lastName='Ireland' age='49' hairColor='Brown'/>
      <MyComponent firstName='Michelle' lastName='Cargill' age='52' hairColor='Brown'/>
    </div>
  );
}

export default App;
