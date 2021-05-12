import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(!pressed);
  }

  useEffect(() => {
    if (pressed) {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
          .then(response => {setPokemon(response.data.results)})
    }}, [pressed]);

  return (
      <div>
        <button onClick={handleClick}>Fetch Pokemon!</button>
        <ul>
          {pokemon.length > 0 && pokemon.map((poke, index)=>{
              return (<li key={index}>{poke.name}</li>)
          })}
        </ul>
      </div>
  );
}



export default App;
