import type { ActionTree } from "vuex";
import type { PokedexStateInterface } from "./state";
import type { StateInterface } from "@/store";

const actions: ActionTree<PokedexStateInterface, StateInterface> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
};

export default actions;
