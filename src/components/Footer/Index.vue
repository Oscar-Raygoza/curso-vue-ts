 <template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong><a href="https://www.github.com/Oscar-Raygoza"
          target="_blank">Oscar-Raygoza_</a></strong>
    </v-col>
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
  margin-top: 2rem;
  max-height: 300px;
}
</style>
