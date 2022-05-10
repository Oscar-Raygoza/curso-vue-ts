import type { GetterTree } from "vuex";
import type { PokedexStateInterface } from "./state";
import type { StateInterface } from "@/store";

const getters: GetterTree<PokedexStateInterface, StateInterface> = {
  someGetter(/* state */) {
    // return true;
  },
};

export default getters;
