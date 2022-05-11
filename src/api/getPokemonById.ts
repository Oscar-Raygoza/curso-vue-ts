const BASE_API = import.meta.env.VITE_BASE_POKEAPI
  ? import.meta.env.VITE_BASE_POKEAPI
  : "";

const getPokemonById = (name?: string | number): Promise<Response> => {
  return fetch(`${BASE_API}/${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export default getPokemonById;
