<template>
<div class="container-vuex-view">
  <v-card
    :loading="loading"
  elevation="24"
  outlined
  shaped
    min-width="600"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="400"
      position="top center"
      :src="pokemon.sprites.other.home.front_default"
    ></v-img>

    <v-card-title>Hola {{ pokemon.name }}</v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        <h2>experience: {{ pokemon. base_experience }}px </h2>
      </div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Stats</v-card-title>

    <v-card-text>
      <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
        v-for="stats in pokemon.stats" :key="index"
      >
        <v-chip>{{ stats.stat.name }}: {{ stats.base_stat }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        to="/pokedex-vuex"
        @click="reserve"
      >
        Go to home
      </v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getPokemonById } from "@/api";

@Component({})
export default class Pokedex extends Vue {
    public error = false;
    public loading = true;
    public pokemon = [];
    public pokemonId = Math.floor(Math.random() * 806 + 1).toString();
    public errorMessage = [];
    data(): any {
        return {
            error: false,
            loading: true,
            pokemon: null,
            pokemonId: Math.floor(Math.random() * 806 + 1).toString(),
        };
    }
    public async getPokemon() {
        getPokemonById(this.$route.params.name)
            .then((res) => res.json())
            .then((data) => {
                this.pokemon = data;
                this.loading = false;
            })
            .catch((err) => {
                this.loading = false;
                this.error = true;
                this.errorMessage = err.message;
            });
    }
    public async handleSubmit(pokemonId: string) {
        if (pokemonId !== "") {
            this.error = false;
            this.loading = true;
            this.pokemonId = pokemonId;
            this.getPokemon();
            return;
        }
        this.error = true;
    }
    created() {
        this.getPokemon();
    }
}
</script>

<style scoped>
.v-image__image{
 background-size:100% 100%;
}
.container-vuex-view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}
</style>