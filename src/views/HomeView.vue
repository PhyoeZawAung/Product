<template>
  <Home />
</template>

<script>
import Home from "@/components/Home.vue";
export default {
  components: {
    Home,
  },
  mounted(){
    this.$store.dispatch('getProductAPI');
    this.$store.dispatch('getCartsFromStorage');
  }
 
};
</script>

<style>
</style>