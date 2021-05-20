import './App.css';
import React from 'react';
import { Router } from '@reach/router';

import HomePage from "./components/HomePage";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
        <ProductInfo path="/:id" />
      </Router>
    </div>
  );
}

export default App;
