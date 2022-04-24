import type { ActionTree } from "vuex";
import type { ExampleStateInterface } from "./state";
import type { StateInterface } from "@/store";

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
};

export default actions;
