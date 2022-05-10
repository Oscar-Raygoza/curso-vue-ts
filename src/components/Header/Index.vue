<template>
  <div>
    <v-app-bar class="app-bar" absolute color="white">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Pokedex Palace</v-toolbar-title>

      <v-spacer></v-spacer>


      <v-btn class="btn" color="secundary" v-for="item in menuItems" :key="item.title" :to="item.path" text>
        {{ item.title }} <v-icon class="btn-icon">{{ item.icon }}</v-icon>
      </v-btn>

    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { title } from 'process';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'AppHeader',
  computed: {}
})
export default class HeaderComponent extends Vue {
  public items = [];
  public menuItems = [];

  data(): any {
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/', icon: 'mdi-home' },
        { title: 'Pokehome', path: '/pokehome', icon: 'mdi-pokeball' },
        { title: 'PokedexView', path: '/pokedex-vuex', icon: 'mdi-pokeball' },
        { title: 'Error', path: '/error', icon: 'mdi-alert' }
      ]
    }
  }
}
</script>
<style scoped>
.app-bar {
  position: relative;
  margin-top: 10px;
}
.btn {
  margin: 10px;
  padding: 10px;
}
.btn-icon {
  margin: 10px;
}
</style>