const getPokemons = `
  query pokemons($first: Int!){
    pokemons(first: $first){
      id
      number
      name
      image
      classification
    }
  }
`;

export default getPokemons;
