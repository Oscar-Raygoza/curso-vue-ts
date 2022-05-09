import type { GetterTree } from "vuex";
import type { LoadingStateInterface } from "./state";
import type { StateInterface } from "@/store";

const getters: GetterTree<LoadingStateInterface, StateInterface> = {
  someGetter(/* state */) {
    // return true;
  },
};

export default getters;
