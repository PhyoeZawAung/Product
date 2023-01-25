<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-8 justify-content-center mt-5">
        <div class="row">
          <div class="col-4">
            <img src="@/assets/logo.png" />
          </div>
          <div class="col-8 text-left">
            <h1>{{ product[0].title }}</h1>
            <p>
              {{ product[0].description }}
            </p>
            <strong class="mt-3">${{ product[0].price }}</strong>
            <form class="mt-3">
              <label class="form-label">Quantity</label>
              <input
                type="text"
                class="form-control"
                style="width: 50px"
                v-model.number="quantity"
              />
            </form>
            <button
              type="button"
              class="btn btn-secondary mt-3 me-5"
              @click="$router.back()"
            >
              go back
            </button>
            <button
              type="button"
              class="btn btn-primary mt-3"
              @click="addToCart"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      quantity: 1,
      product: {},
    };
  },
  beforeMount() {
    this.product = this.$store.getters.getProduct(this.id);
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        id: this.id,
        quantity: this.quantity,
      });
      this.$notify({
                title: 'Important message',
                text: 'Hello user!'
              });
    },
  },
};
</script>

<style>
</style>