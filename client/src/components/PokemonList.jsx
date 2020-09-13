import React, {useState} from 'react';
import PokemonBox from './PokemonBox.jsx';

const PokemonList = ({visible, pokedex, popUp, assignCurrentPokemon, setDescription, setMeasurements}) => {


  return (
    <div className="pokemon-list">
      {pokedex
        .filter((pokemon, index) => index < visible)
        .map((pokemon, index) => (
          <PokemonBox
            key={pokemon.id}
            setDescription={setDescription}
            assignCurrentPokemon={assignCurrentPokemon}
            setMeasurements={setMeasurements}
            popUp={popUp}
            pokemon={pokemon}
          />
        ))}
    </div>
  );
}

export default PokemonList;