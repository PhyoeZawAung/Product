<template>
  <div class="col-3 mt-3">
    <div class="card h-100 text-left">
      <img
        src="@/assets/logo.png"
        style="width: 150px; height: 100px"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="`/product/${product.id}`">{{
            product.title
          }}</router-link>
        </h4>
        <strong>${{ product.price }}</strong>
        <p class="card-text">{{ product.description }}</p>
        <button
          @click="addToCart({ id: product.id, quantity: 1 })"
          class="btn btn-primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    product: Object,
  },
  methods: {
    ...mapActions(["addToCart"]),
  },
};
</script>

<style>
</style>