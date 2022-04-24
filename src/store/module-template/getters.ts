import type { GetterTree } from "vuex";
import type { ExampleStateInterface } from "./state";
import type { StateInterface } from "@/store";

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  someGetter(/* state */) {
    // return true;
  },
};

export default getters;
