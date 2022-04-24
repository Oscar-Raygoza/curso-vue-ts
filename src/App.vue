<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Layout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <Layout>
    <template #header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Pokedex</RouterLink>
          <RouterLink to="/pokemons">Pokemons</RouterLink>
          <!-- RouterLink !== <a href="/pokemons">Pokemons</a> -->
        </nav>
      </div>
    </template>
    <template #content>
      <RouterView />
    </template>
  </Layout>
</template>

<style>
@import "@/assets/base.css";

#app {
  margin-top: 2em;
  margin: 0 auto;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
