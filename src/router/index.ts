import { createRouter, createWebHistory } from "vue-router";
import PokedexView from "@/views/PokedexView.vue";

console.log(import.meta.env.VITE_BASE_BACKEND_URL);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "PokedexView",
      component: PokedexView,
    },
    {
      path: "/pokemons",
      name: "PokemonsView",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PokemonsView.vue"),
    },
  ],
});

export default router;
