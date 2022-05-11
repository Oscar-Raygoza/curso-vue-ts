<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong><a style="color: #000" href="https://www.github.com/Oscar-Raygoza"
          target="_blank">Oscar-Raygoza_</a></strong>
    </v-col>
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
.v-btn {
  display: flex;
  justify-content: center;
  text-align: center;
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
