import React, { useState, useEffect } from "react";
import Pokelist from "../../dist/pokedex.json";
import Topbar from "./Topbar.jsx";
import Footer from "./Footer.jsx";
import PokemonList from "./PokemonList.jsx";
import Modal from "./Modal.jsx";
import SortDex from './SortDex.jsx';

const App = () => {
  let [pokedex, setPokedex] = useState([]);
  let [loading, setLoading] = useState(true);
  let [loadMoreButton, setLoadMore] = useState(true);
  let [visible, setVisible] = useState(20);
  let [modal, setModal] = useState(false);
  let [currentPokemon, setCurrentPokemon] = useState(1);
  let [description, setDescription] = useState("");
  let [measurements, setMeasurements] = useState({ height: "", weight: "" });

  const getKantoPokemon = () => {
    setPokedex(Pokelist.slice(0, 151));
    setVisible(20);
  };

  const getJohtoPokemon = () => {
    setPokedex(Pokelist.slice(151, 251));
    setVisible(20);
  };

  const assignCurrentPokemon = (pokemonId) => {
    pokedex.forEach((pokemon) => {
      if (pokemon.id === pokemonId) {
        setCurrentPokemon(pokemon)
      }
    })
  }

  const getHoennPokemon = () => {
    setPokedex(Pokelist.slice(251, 386));
    setVisible(20);
  };

  useEffect(() => {
    getKantoPokemon();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 50);
    return () => clearTimeout(timer).catch(console.log);
  }, []);

  const popUp = () => {
    setModal(!modal);
  };

  const loadMore = () => {
    setVisible((visible += 20));
  };

  if (loading) {
    return (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
        <div className="bounce4"></div>
        <div className="bounce5"></div>
        <h1 style={{ color: "blue", marginTop: "5px" }}>LOADING</h1>
      </div>
    );
  }

  if (modal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div>
      <Topbar />
      <SortDex
        getJohtoPokemon={getJohtoPokemon}
        getHoennPokemon={getHoennPokemon}
        getKantoPokemon={getKantoPokemon}
      />
      <PokemonList
        popUp={popUp}
        loadMore={loadMore}
        pokedex={pokedex}
        visible={visible}
        assignCurrentPokemon={assignCurrentPokemon}
        setDescription={setDescription}
        setMeasurements={setMeasurements}
      />
      <div className="button-div">
        {visible < pokedex.length ? (
          <button className="button-load" onClick={loadMore}>
            Load More
          </button>
        ) : null}
      </div>
      {modal ? (
        <React.Fragment>
          <div className="screen">
            <Modal
              pokedex={pokedex}
              className="modal"
              description={description}
              popUp={popUp}
              currentPokemon={currentPokemon}
              measurements={measurements}
            />
          </div>
        </React.Fragment>
      ) : null}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
