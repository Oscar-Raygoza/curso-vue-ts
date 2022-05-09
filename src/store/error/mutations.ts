import type { MutationTree } from "vuex";
import type { ErrorStateInterface } from "./state";

const mutation: MutationTree<ErrorStateInterface> = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  },
  SET_ERROR (state, payload) {
    state.error = payload
  }
};

export default mutation;
