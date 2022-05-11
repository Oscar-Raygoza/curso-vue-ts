<template>
  <div class="home">
    <Pokedex />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Pokedex from "@/components/Pokedex/Index.vue";

@Component({
  components: {
    Pokedex,
  },
})
export default class PokeHome extends Vue {}
</script>

<style scoped></style>
