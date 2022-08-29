import React from 'react';
import { arrayOf } from 'prop-types';

import { pokemonType } from '../types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.showNextPokemon = this.showNextPokemon.bind(this);
    this.fire = this.fire.bind(this);
  }

  state = {
    pokemonIndex: 0,
    pokemonLista: []
  };

  fire() {
    const { pokemonList } = this.props;
    this.setState(() => ({
      // filter: 'fire'
    }))
    
    const firePokemonsList = pokemonList.filter((element) => element.type === 'Fire');
    return pokemonList.filter((element) => element.type === 'Fire');


  }

  setpokemonList() {
    this.setState(() => ({
      pokemonlista: this.props
    }))
  }

  showNextPokemon() {
    const { pokemonList } = this.props;
    const { pokemonIndex } = this.state;
    if (pokemonIndex === pokemonList.length - 1) {
      this.setState(() => ({
        pokemonIndex: 0,
        // filter: null
      }));
      return;
    }
    this.setState((previusState) => ({
      pokemonIndex: previusState.pokemonIndex + 1,
      // filter: null
    }));
  }

  render() {
    const { pokemonIndex } = this.state;
    const { pokemonList } = this.props;
    const list = pokemonList
    const firePokemons = pokemonList.filter((element) => element.type === 'Fire');
    const psychicPokemons = pokemonList.filter((element) => element.type === 'Psychic');
    if (this.state.filter === null) {
      const list = list[0]
      console.log(list)
      return list
    }
    const pokemon = list[pokemonIndex];
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon key={ pokemon.id } pokemon={ pokemon } />
          <button type="button" onClick={ this.showNextPokemon }>Próximo pokémon</button>
          <button type="button" onClick={ this.fire }>Fire</button>
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
