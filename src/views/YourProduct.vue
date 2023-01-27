<template>
  <div class="container mt-5">
    <div v-if="getCarts.length == 0">
      <p class="display-3">You have no order now</p>
    </div>
    <div v-else class="mt-4">
      <h3 class="mt-4">Your Orders</h3>

      <your-product-cart
        v-for="cart in getCarts"
        :key="cart.id"
        :product="cart"
      />
    </div>
  </div>
</template>

<script>
import YourProductCart from "@/components/YourProductCart.vue";
import { mapGetters } from "vuex";
export default {
  components: { YourProductCart },
  computed: {
    ...mapGetters(["getCarts"]),
  },
};
</script>

<style>
</style>