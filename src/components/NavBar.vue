<template>
  <div>
    <nav
      class="
        navbar navbar-expand navbar-dark
        bg-dark
        fixed-top
        bg-body-tertiary
      "
    >
      <div class="container">
        <ul class="nav navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/yourproducts"
              >My Orders</router-link
            >
          </li>
        </ul>
        <div class="d-flex">
        <select
          class="form-select form-select-sm me-2"
          style="width:300px"
          aria-label=".form-select-sm example"
        >
          <option selected>All</option>
        </select>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ getCartCount }} Cart
          </button>
          <div @click="$event.stopPropagation()">
            <mini-cart />
          </div>
        </div>
      </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "./MiniCart.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    MiniCart,
  },
  computed: {
    ...mapGetters(["getCartCount","getProducts"]),
  },
};
</script>

<style>
</style>