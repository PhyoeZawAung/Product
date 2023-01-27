<template>
  <div class="col-3 mt-3">
    <div class="card h-100 text-left justify-content-center">
      <div
        style="
          height: 300px;
          width: 180px;
          display: block;
          margin: auto;
          align-items: center;
          cursor: pointer;"
           @click="goToProduct"
      >
        <img
          :src="product.image"
          class="card-img-top d-block mx-auto img-fluid mt-3"
          style="width: 250px; height: 250px"
          alt="..."
        />
      </div>
      <div class="card-body">
        <div style="height: 100px">
          <h4 class="card-title">
            <h3 class="desctitle" :to="`/product/${product.id}`">{{
              product.title
            }}</h3>
          </h4>
       <div class="d-flex justify-content-between">
        <strong>${{ product.price }}</strong>
          <span class="badge" :class="type">{{ product.category }}</span>
       </div>
         
          <p class="desc">{{ product.description }}</p>
        </div>
        
         
          <button
            @click="addToCart({ id: product.id, quantity: 1 })"
            class="btn btn-secondary"
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
  data(){
    return({
      type:''
    })
  },
  methods: {
    ...mapActions(["addToCart"]),
   
     goToProduct(){
      this.$router.push(`product/${this.product.id}`);
     }
    
  },
  mounted(){
    
      switch(this.product.category){
        case "men's clothing": this.type= 'text-bg-warning';break;
        case "jewelery": this.type= 'text-bg-primary';break;
        case "electronics": this.type= 'text-bg-danger';break;
        case "women's clothing": this.type= 'text-bg-success';break;
        default:this.type='text-bg-primary'
      }
    }
    
 
};
</script>


<style>
.desc {
  display: block;
  width: 200px;
  height: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.desctitle {
  display: block;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>