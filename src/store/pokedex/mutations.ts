import type { MutationTree } from "vuex";
import type { PokedexStateInterface } from "./state";

const mutation: MutationTree<PokedexStateInterface> = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  },
};

export default mutation;
