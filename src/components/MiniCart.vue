<template>
  <div class="dropdown-menu" style="min-width: 320px; right: 0; left: auto">
    <div v-if="getCarts.length == 0" class="text-center">
      <h5>No Oreder Card</h5>
    </div>
    <div v-else class="mt-1" v-for="cart in getCarts" :key="cart.id">
      <div class="px-3 d-flex justify-content-between">
        <div>
          <strong>{{ cart.title }}</strong>
          <br />
         <span class="text-secondary">{{ cart.quantity }} x ${{ cart.price }}</span> 
        </div>
        <div>
          <button class="btn btn-secondary" @click="removeCart(cart.id)">
            Remove
          </button>
        </div>
      </div>
    </div>
    <hr />
    <div class="px-3 d-flex justify-content-between">
      <span class="fw-bold text-primary">Total : $ {{ getTotal }}</span>
      <button class="btn btn-danger" @click="clearCart">Clear Cart</button>
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
        total += data.price * data.quantity;
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