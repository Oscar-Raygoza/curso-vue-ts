<template>
  <div class="container-vuex">
    <h1>Pokedex Home</h1>
    <img
      class="img"
      alt="pokemon logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
    />
    <div class="list">
      <v-card
        class="mx-auto"
        max-width="344"
        outlined
        v-for="{ id, name, url } in pokemons"
        :key="id"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">{{ name }}</div>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">
            <img
              :src="`${imageUrl}/${id}.png`"
              :alt="`Pokemon ${name}`"
              :title="`Pokemon ${name}`"
            />
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn 
            outlined 
            rounded 
            text 
            @click="redirectToPokemonView(name)"
          >
            Ver Detalles
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div id="scroll-triger" ref="infiniteScrollTrigger">
      <BaseLoading />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BaseLoading from "@/components/BaseLoading.vue";

import { getPokemons } from "@/api";

@Component({
  name: "Pokedex",
  components: {
    BaseLoading,
  },
})
export default class Pokedex extends Vue {
  public imageUrl = "";
  public apiUrl = "";
  public pokemons = [];
  public nextUrl = "";
  public currentUrl = "";

  data() {
    return {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      apiUrl: import.meta.env.VITE_BASE_POKEAPI
        ? import.meta.env.VITE_BASE_POKEAPI
        : "https://pokeapi.co/api/v2/pokemon/",

      pokemons: [],
      nextUrl: "",
      currentUrl: "",
    };
  }

  public async fetchPokemons() {
    getPokemons(this.currentUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        this.nextUrl = data.next;
        data.results.forEach((pokemon) => {
          pokemon.id = pokemon.url
            .split("/")
            .filter(function (part) {
              return !!part;
            })
            .pop();

          this.pokemons.push(pokemon);
        });
      })
      .catch((err) => {
        console.error({ err });
      });
  }

  scrollTriger() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0 && this.nextUrl) {
          this.next();
        }
      });
    });

    observer.observe(this.$refs.infiniteScrollTrigger);
  }

  next() {
    this.currentUrl = this.nextUrl;
    this.fetchPokemons();
  }

  created() {
    this.fetchPokemons();
  }

  mounted() {
    this.scrollTriger();
  }

  redirectToPokemonView(name: string) {
    this.$router.push({
      name: "PokedexView",
      params: {
        name,
      },
    });
  }
}
</script>

<style scoped>
.container-vuex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}
.img {
  width: 200px;
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
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
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
