const BASE_API = import.meta.env.VITE_BASE_POKEAPI
  ? import.meta.env.VITE_BASE_POKEAPI
  : "";

const getPokemons = (currentUrl?: string): Promise<Response> => {
  return fetch(currentUrl ? currentUrl : BASE_API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export default getPokemons;
