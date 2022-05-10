import type { Module } from "vuex";
import type { StateInterface } from "@/store";
import type { PokedexStateInterface } from "./state";

import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const placesModule: Module<PokedexStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default placesModule;
