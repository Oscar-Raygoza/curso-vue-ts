<template>
  <div class="container-vuex">

    <h1>Pokedex Vuex</h1>
    <img alt="Vue logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg">
    <div class="list">
      <v-card class="mx-auto" max-width="344" outlined v-for="({ id, name, url }) in pokemons" :key="id"
        @click="redirectView(name)">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              <h3>{{ name }}</h3>
            </div>
            <v-list-item-title class="text-h5 mb-1">
              test
            </v-list-item-title>
            <v-list-item-subtitle>id: {{ id }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">
            <img :src="`${imageUrl}${id}.png`" width="96" height="96" alt="">
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined rounded text>
            Ver Detalles
          </v-btn>
        </v-card-actions>
      </v-card>

      <div id="scroll-trigger" ref="infinitescrolltrigger">
        <BaseLoading />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import BaseLoading from "@/components/BaseLoading.vue";
import { getPokemons } from "@/api"

@Component({
  components: {
    BaseLoading
  }
})
export default class Pokedex extends Vue {

  public imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  public apiUrl = "https://pokeapi.co/api/v2/pokemon/"
  public pokemonUrl = ""
  public showDetail = false
  public pokemons = []
  public nextUrl = ""
  public currentUrl = ""

  data(): any {
    return {
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      pokemonUrl: "",
      showDetail: false,
      pokemons: [],
      nextUrl: "",
      currentUrl: ""
    };
  }


  fetchData() {
    getPokemons(this.currentUrl)
      .then((resp) => {
        if (resp.status === 200)
          return resp.json();
      })
      .then((data) => {
        console.log({ data })
        this.nextUrl = data.next;
        data.results.forEach(pokemon => {
          pokemon.id = pokemon.url.split("/")
            .filter(function (part) { return !!part; }).pop();
          this.pokemons.push(pokemon);
          console.log(data)
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  scrollTrigger() {
    const observer = new IntersectionObserver((entries)  => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && this.nextUrl) {
          this.next();
        }
      });
    });
    observer.observe(this.$refs.infinitescrolltrigger);
  }

  next() {
    this.currentUrl = this.nextUrl;
    this.fetchData();
  }

  redirectView(id: string) {
    this.$router.push({
      name: 'PokemonView',
      params: {
        id
      }
    })
  }

  created() {
    this.currentUrl = this.apiUrl;
    this.fetchData();
  }
  mounted() {
    this.scrollTrigger();
  }
}
</script>

<style lang="scss" scoped>
.container-vuex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  width: 100%;
  margin-top: 60px;
  max-width: 800px;
}

article {
  height: 150px;
  background-color: #efefef;
  text-align: center;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
    0 10px 10px rgba(0, 0, 0, .2);
}

h3 {
  margin: 0;
}

#scroll-trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  font-size: 2rem;
  color: #efefef;
}
</style>

