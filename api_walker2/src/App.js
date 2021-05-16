import { Router, navigate } from '@reach/router';
import React from 'react';
import { useState } from 'react';

import Get from './components/Get';

function App() {
  const [type, setType] = useState("");
  const [id, setId] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(type, id);
    navigate(`/${type}/${id}`);
  };

  const changeType = (event) => {
    setType(event.target.value);
  }

  const changeId = (event) => {
    setId(event.target.value);
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <select nam="type" id="type" onChange={changeType}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
        </select>
        <input type="number" onChange={changeId}></input>
        <button>Go!</button>
      </form>
      <Router>
        <Get path="/:type/:id"/>
      </Router>
    </div>
  );
};

export default App;
