import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import type { StateInterface } from "@/store";

export const usePokemonsStore = () => {
  const store = useStore<StateInterface>();
  onMounted(() => {
    /** on mounted */
  });

  return {
    // State
    pokemons: computed(() => store.state.example),
    // Getters

    // Mutations

    // Actions

    // Mutations
  };
};
