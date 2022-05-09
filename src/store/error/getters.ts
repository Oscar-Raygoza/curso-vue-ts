import type { GetterTree } from "vuex";
import type { ErrorStateInterface } from "./state";
import type { StateInterface } from "@/store";

const getters: GetterTree<ErrorStateInterface, StateInterface> = {
  someGetter(/* state */) {
    // return true;
  },
};

export default getters;
