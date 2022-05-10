const BASE_POKE_API = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = (currentUrl?: string): Promise<Response> =>
  fetch(currentUrl ? currentUrl : BASE_POKE_API, {
    method: "GET", // or 'POST'
    headers: {
      "Content-Type": "application/json",
    },
  });

export default getPokemons;
