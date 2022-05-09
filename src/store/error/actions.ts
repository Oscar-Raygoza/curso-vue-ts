import type { ActionTree } from "vuex";
import type { ErrorStateInterface } from "./state";
import type { StateInterface } from "@/store";

const actions: ActionTree<ErrorStateInterface, StateInterface> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
};

export default actions;
