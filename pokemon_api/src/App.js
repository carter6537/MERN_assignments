import './App.css';
import React, {useState, useEffect} from 'react';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(!pressed);
  }

  useEffect(() => {
    if (pressed) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
          .then(response => response.json())
          .then(response => setPokemon(response.results))
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
