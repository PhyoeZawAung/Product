<template>
    
    <div class="container">
        <h3 class="mt-3">Your Orders</h3>
        <your-product-cart v-for="cart in getCarts" :key="cart[0].id" :product="cart"/>
    </div>
</template>

<script>
import YourProductCart from '@/components/YourProductCart.vue';
import { mapGetters } from 'vuex';
export default {
  components: { YourProductCart },
   computed:{
    ...mapGetters(['getCarts'])
   } 
};
</script>

<style>
</style>