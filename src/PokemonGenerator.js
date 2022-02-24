import React, { Fragment, useState } from "react";
import {
  useQuery // hook
} from "urql";
import getPokemons from "./api/getPokemons";

const PokemonGenerator = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [classification, setClassification] = useState("");
  const [result, reexecuteQuery] = useQuery({
    query: getPokemons,
    variables: { first: 100 }
  });
  const { data, fetching, error } = result;
  //console.log(data);
  if (fetching) {
    return (
      <Fragment>
        <p>Loading...</p>
      </Fragment>
    );
  }
  if (error) {
    return (
      <Fragment>
        <p>Oh no... {error.message}</p>
      </Fragment>
    );
  }

  function pickPokemon() {
    const index = Math.floor(Math.random() * 100);
    const pokemon = data.pokemons[index];
    setImage(pokemon.image);
    setName(pokemon.name);
    setClassification(pokemon.classification);
    //console.log(pokemon.image);
  }

  return (
    <Fragment>
      {image !== "" && (
        <div>
          <img src={image} />
          <p> Name: {name} </p>
          <p> Classification: {classification} </p>
        </div>
      )}
      <button onClick={pickPokemon}>Click For Pokemon</button>
    </Fragment>
  );
};

export default PokemonGenerator;
