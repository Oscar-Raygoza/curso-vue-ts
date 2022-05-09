import type { MutationTree } from "vuex";
import type { LoadingStateInterface } from "./state";

const mutation: MutationTree<LoadingStateInterface> = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  },
  SET_LOADING (state, payload) {
    state.isLoading = payload
  }
};

export default mutation;
