import type { Module } from "vuex";
import type { StateInterface } from "@/store";
import type { LoadingStateInterface } from "./state";

import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const loading: Module<LoadingStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default loading;
