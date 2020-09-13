import React from 'react';

const SortDex = ({getJohtoPokemon, getHoennPokemon, getKantoPokemon}) => {
  return (
    <div className="sort-dex">
      <button className="kanto-button" onClick={getKantoPokemon}>Kanto Region</button>
      <button className="johto-button" onClick={getJohtoPokemon}>Johto Region</button>
      <button className="hoenn-button" onClick={getHoennPokemon}>Hoenn Region</button>
    </div>
  );
};

export default SortDex;