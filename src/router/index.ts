import Vue, { Component } from "vue";
import Router from "vue-router";

/**
 * Config
 */
Vue.use(Router);

/**
 * Views Components
 */
import HomeView from "@/views/Home/Index.vue";
import Error from "@/views/Error/Index.vue";
import About from "@/views/About/Index.vue";

interface MetaOptions { 
  showBreadcrumb: boolean;
  lazyLoad: boolean; 
  component?: Component;
}

interface RedirectOptions { 
  name: string;
}

interface RouterOptions { 
  path: string;
  name?: string;
  meta?: MetaOptions;
  redirect?: RedirectOptions;
}

/**
 * Router Options
 */
const routerOptions: RouterOptions[] = [
  {
    path: "/",
    name: "Home",
    meta: { showBreadcrumb: true, lazyLoad: true, component: HomeView },
  },
  { path: "/about", name: "About", meta: { showBreadcrumb: false, lazyLoad: true, component: About } },
  { path: "/error", name: "Error", meta: { showBreadcrumb: false, lazyLoad: true, component: Error } },
  { path: "/pokehome", name: "Pokehome", meta: { showBreadcrumb: false, lazyLoad: true } },
  { path: "/pokedex-vuex", name: "PokedexVuex", meta: { showBreadcrumb: false, lazyLoad: true } },
  { path: "/pokedex-vuex/pokemon/:id", name: "PokemonView", meta: { showBreadcrumb: false, lazyLoad: true } },
  { path: "*", redirect: { name: "Home" } },
];

const routes = routerOptions.map((r) => {
  return {
    ...r,
    component: r.meta?.lazyLoad
      ? () => import(`../views/${r.name}/Index.vue`)
      : r.meta?.component,
  };
});

const router = new Router({
  mode: "history",
  routes,
});

export default router;
