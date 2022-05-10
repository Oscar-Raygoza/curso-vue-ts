const BASE_POKE_API = "https://pokeapi.co/api/v2/pokemon";

const searchPokemonById = (pokemonId: number | string): Promise<Response> =>
  fetch(`${BASE_POKE_API}/${pokemonId}`, {
    method: "GET", // or 'POST'
    headers: {
      "Content-Type": "application/json",
    },
  });

export default searchPokemonById;
