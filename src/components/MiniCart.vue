<template>
  <div class="dropdown-menu" style="min-width: 320px; right: 0; left: auto">
    <div class="mt-1" v-for="cart in getCarts" :key="cart[0].id">
      <div class="px-3 d-flex justify-content-between">
        <div>
          <strong>{{ cart[0].title }}</strong>
          <br />
          {{ cart.quantity }} x ${{ cart[0].price }}
        </div>
        <div>
          <button class="btn btn-secondary" @click="removeCart(cart[0].id)">
            Remove
          </button>
        </div>
      </div>
    </div>
    <hr />
    <div class="px-3 d-flex justify-content-between">
      <span>Total:${{ getTotal }}</span>
      <button class="btn btn-primary" @click="clearCart">Clear Cart</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCarts"]),
    getTotal() {
      let total = 0;
      this.getCarts.forEach((data) => {
        total += data[0].price * data.quantity;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(["removeCart", "clearCart"]),
  },
};
</script>

<style>
</style>