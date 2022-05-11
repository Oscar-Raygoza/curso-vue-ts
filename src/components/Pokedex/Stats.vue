<template>
  <div class="stats">
    <!--Refactor Component-->
    <!--<ScreenTypes :types="pokemon.types" :sprites="pokemon.sprites" /> -->
    <div class="screen">
      <h1 style="display: inline-block; margin-top: 5px">{{ pokemon.name }}</h1>
      <img :src="pokemon.sprites.front_default" class="image-stat" />
      <div v-for="item in pokemon.types" :key="item.type.name">
        <div class="pokemon-type">
          {{ item.type.name }}
        </div>
      </div>
    </div>
    <!--Refactor Component-->>
    <ul class="pokemon-stats">
      <img :src="pokemon.sprites.back_shiny" class="image-stat" />
      <Stat :item="item" v-for="item in pokemon.stats" :key="item.stat.name" />
    </ul>
    <span class="in-btn in-btn--tag"></span>
    <span class="in-btn in-btn--tag secundary"></span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import Stat from "@/components/Pokedex/Stat.vue";

@Component({
  name: "Stats",
  components: {
      Stat,
  }
})
export default class Stats extends Vue {
  @Prop({ default: [] }) public pokemon!: [];
  @Prop({ default: false }) public loading: boolean;
  @Prop({ default: false }) public error: boolean;
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;1,700&display=swap");

.screen {
  background: rgba(0, 0, 0, 1);
  background: linear-gradient(
    111deg,
    #284e61 0%,
    rgba(0, 0, 0, 1) 3%,
    #284e61 5%,
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 17%,
    #284e61 40%,
    rgba(0, 0, 0, 1) 49%,
    #284e61 98%,
    rgba(0, 0, 0, 1) 100%
  );
  margin: 0 auto;
  margin-top: 10px;
  color: yellow;
  width: 90%;
  border-radius: 35px;
  font-family: "Roboto Mono", monospace;
  height: 150px;
  text-transform: uppercase;
  font-style: italic;
}

.pokedex-no-screen {
  width: 100%;
  height: 200px;
}

.image-stat {
  width: 150px;
  height: auto;
  float: right;
}

.pokemon-type {
  background: linear-gradient(
    to bottom,
    #41ffab,
    #41ffab 60%,
    #18d9ff 70%,
    #18d9ff 100%
  );
  background-clip: text;
  font-size: xx-large;
  -webkit-background-clip: text;
  color: transparent;
  background-repeat: no-repeat;
  transition: background 0.2s ease-out;
  white-space: nowrap;
}

.pokemon-stats {
  background: rgba(45, 122, 180, 1);
  background-color: linear-gradient(
    111deg,
    #284e61 0%,
    rgba(45, 122, 180, 1) 3%,
    #284e61 5%,
    rgba(45, 122, 180, 1) 15%,
    rgba(45, 122, 180, 1) 17%,
    #284e61 40%,
    rgba(45, 122, 180, 1) 49%,
    #284e61 98%,
    rgba(45, 122, 180, 1) 100%
  );
  background-image: url("../../assets/images/PokedexScreen/screen.png");
  margin: 0 auto;
  margin-top: 10px;
  color: yellow;
  width: 85%;
  border-radius: 35px;
  font-family: "Roboto Mono", monospace;
  background-size: cover;
  height: auto;
  padding: 10px;
  text-transform: uppercase;
  font-style: italic;
}

.in-btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 30px;

  &--primary {
    color: #3d0f53;
    margin-top: 30px;
    background-color: #00a9f6;
    border-radius: 140px;
    box-shadow: 6px 6px #000;
    font-size: xx-large;
    font-weight: bold;
    position: relative;
    border: 10px solid;
    height: 60px;
    text-transform: uppercase;
    padding: 29px 24px 69px 23px;
    position: relative;
    transition: margin 0.15s ease-in-out;

    &:hover {
      cursor: pointer;
      color: #000;
      background-color: #00dafe;
    }

    &:checked {
      color: yellow;
    }
  }

  &--tag {
    color: #3d0f53;
    margin-top: 30px;
    background-color: #2ff555;
    border-radius: 140px;
    box-shadow: 6px 6px #000;
    font-size: xx-large;
    font-weight: bold;
    position: relative;
    border: 10px solid;
    height: 60px;
    text-transform: uppercase;
    padding: 0px 0px 0px 100px;
    position: relative;
    transition: margin 0.15s ease-in-out;
    position: relative;
    top: 40px;
    animation: lights 1s alternate infinite;

    &.secundary {
      background-color: #ff651b;

      &:hover {
        background-color: red;
      }

      animation: lights 2s reverse infinite;
    }

    &:hover {
      cursor: pointer;
      color: #000;
      background-color: #05ff34;
    }

    &:checked {
      color: yellow;
    }
  }

  &.float-right {
    float: right;
  }
}

@keyframes lights {
  from {
    background-color: #05ff34;
  }

  to {
    background-color: #ff651b;
  }
}
</style>
