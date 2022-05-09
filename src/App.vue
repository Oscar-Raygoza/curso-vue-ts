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
