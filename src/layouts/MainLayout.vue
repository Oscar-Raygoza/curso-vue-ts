<template>
  <div class="">
    <Header/>

    <transition name="fade">
      <router-view/>
    </transition>

    <Footer/>

  </div>
</template>

<script lang="ts">
import Header from '@/components/Header/Index.vue';
import Footer from '@/components/Footer/Index.vue';
export default {
  name: 'MainLayout',
  components: {
    Header, 
    Footer
  }
}
</script>

<style>
  .fade-enter-active {
    transition: transform 1s, opacity 2s;
  }
  .fade-enter {
    opacity: 0;
    transform: translateY(-40px);
  }
</style>