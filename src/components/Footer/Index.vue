<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Footer',
  computed: {}
})
export default class FooterComponent extends Vue {
  private items = [];
  data(): any {
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ]
    }
  }
}
</script>
<style>
::v-deep .v-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 180px;
  padding: 30px;
  background-color: var(--vt-c-black);
}
.logo {
  width: 3rem;
  height: 3rem;
  max-width: 100%;
  margin-bottom: 0;
  color: white;
}
.container {
  background-color: #fafafa;
  padding-bottom: 150px;
  height: 100vh;
  margin-top: 2rem;
}
</style>
