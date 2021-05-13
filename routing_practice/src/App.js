import React from 'react';
import {Router} from '@reach/router';
import './App.css';

import Home from './components/Home';
import Change from './components/Change';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Change path="/:input"/>
        <Color path="/:word/:bgc/:fc"/>
      </Router>
    </div>
  );
}

export default App;
