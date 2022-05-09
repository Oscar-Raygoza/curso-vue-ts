import type { ActionTree } from "vuex";
import type { LoadingStateInterface } from "./state";
import type { StateInterface } from "@/store";

const actions: ActionTree<LoadingStateInterface, StateInterface> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
};

export default actions;
