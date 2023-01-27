<template>
<div :class="getType" class="alert alert-dismissible fade show" role="alert">
  <span>{{noti.message}}</span>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</template>

<script>

import {mapActions} from 'vuex'
export default {
props:{
    noti:Object
},
data(){
    return({
        timeOut:null
    })
},
computed:{
    getType(){
        return `alert-${this.noti.type}`
    }
},
methods:{
    ...mapActions(['removeNotification']),
},
created(){
   this.timeOut = setTimeout(()=>{
    this.removeNotification(this.noti.id);
   },3000) 
},
beforeDestroy(){
    clearTimeout(this.timeOut);
}
}
</script>

<style>

</style>