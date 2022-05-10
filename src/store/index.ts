import Vue from "vue";
import Vuex from "vuex";

// My custom modules
import exampleModule from "./module-template";
import type { ExampleStateInterface } from "./module-template/state";

import loading from "./loading";
import type { LoadingStateInterface } from "./loading/state";

import error from "./error";
import type { ErrorStateInterface } from "./error/state";

import pokedex from "./pokedex";
import type { PokedexStateInterface } from "./pokedex/state";

Vue.use(Vuex);
export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: ExampleStateInterface;
  loading: LoadingStateInterface;
  error: ErrorStateInterface;
  pokedex: PokedexStateInterface;
}

export default new Vuex.Store<StateInterface>({
  modules: {
    example: exampleModule,
    loading,
    error,
    pokedex,
  },
});
