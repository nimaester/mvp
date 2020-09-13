import React, {useState} from 'react';

const Modal = ({popUp,currentPokemon,description,pokedex,measurements}) => {

  const fixHeight = () => {
    let num =  measurements.height * 0.3281
    let arr = num.toFixed(1).toString().split(".")
    let split2 = [arr[0], "ft.", arr[1]]
    let split3 = split2[split2.length - 1] === '0' ? [arr[0], "feet"] : arr[0] !== '0' ? [arr[0], "ft", arr[1], "inches"] : [arr[1], "inches"]
    return split3.join(" ")
  }

  const fixWeight = () => {
    return measurements.weight * 0.2204.toFixed(2)
  }

  return (
    <div className="pokemon-modal">
      <button className="x-button" onClick={popUp}>
        x
      </button>
      <img
        className="pokedex-img"
        src={`https://ntpokedextotal.s3-us-west-1.amazonaws.com/pokedex${currentPokemon.id}.png`}
        alt=""
      />
      <span className="pokemon-name">
        {currentPokemon.name.english}
      </span>
      <span className="pokemon-type">
        Type: {currentPokemon.type[0]}
      </span>

      <span className="description">{description}</span>
      <span className="height">Height: {fixHeight()}</span>
      <span className="weight">Weight: {fixWeight()} pounds</span>

      <audio
        autoPlay
        src={`https://7528pkmncries.s3-us-west-1.amazonaws.com/cry${currentPokemon.id}.wav`}
      ></audio>
    </div>
  );
};

export default Modal;


