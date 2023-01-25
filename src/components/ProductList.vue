<template>
  <div class="row d-flex align-items-stretch flex-wrap mx-2">
    <productCart
      v-for="product in getProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template> 

<script>
import productCart from "./productCart.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    productCart,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["getProducts"]),
  },
};
</script>

<style>
</style>