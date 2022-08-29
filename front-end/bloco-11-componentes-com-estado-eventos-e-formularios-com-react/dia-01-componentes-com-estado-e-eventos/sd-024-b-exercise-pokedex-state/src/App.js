import React from 'react';

import './App.css';
import Pokedex from './components/Pokedex';

import pokemonList from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex pokemonList={ pokemonList } />
        <button type="button" onClick={ this.showNextPokemon }>Próximo pokémon</button>
        <button type="button" onClick={ this.fire }>Fire</button>
      </div>
    );
  }
}

export default App;
