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
            <div><strong>Quantity</strong><span>  {{product.quantity}}</span></div>
            <button
              type="button"
              class="btn btn-secondary mt-3 me-5"
              @click="$router.back()"
            >
              go back
            </button>
            <button
              type="button"
              class="btn btn-danger mt-3"
              @click="removeCart(product[0].id)"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr/>
  </div> 
</template>

<script>
import { mapActions } from 'vuex';
export default {
props:{
    product:Object,
},
methods:{
    ...mapActions(['removeCart'])
}
}
</script>

<style>

</style>