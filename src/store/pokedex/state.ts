export interface PokedexStateInterface {
  imageUrl: string;
  apiUrl: string;
  pokemonUrl: string;
  showDetail: boolean;
  pokemons: [],
  nextUrl: string;
  currentUrl: string;
}

function state(): PokedexStateInterface {
  return {
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
    apiUrl: "https://pokeapi.co/api/v2/pokemon/",
    pokemonUrl: "",
    showDetail: false,
    pokemons: [],
    nextUrl: "",
    currentUrl: ""
  };
}

export default state;
