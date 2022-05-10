<template>
 <div id="app">

    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>

    <MainLayout v-else/>

  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'

import LoadLayout from '@/layouts/LoadLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import BaseLoading from '@/components/BaseLoading.vue'

export default {
  name: "App",
  components: {
    LoadLayout,
    MainLayout,
    BaseLoading
  },
  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}  
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 10px;
    &.router-link-exact-active {
      color: #8300d3;
    }
  }
}
</style>