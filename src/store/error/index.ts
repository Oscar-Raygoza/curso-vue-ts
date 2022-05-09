import type { Module } from "vuex";
import type { StateInterface } from "@/store";
import type { ErrorStateInterface } from "./state";

import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const placesModule: Module<ErrorStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default placesModule;
