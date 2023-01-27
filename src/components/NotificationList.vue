<template>
  <div class="notification">
    <NotificationMessage v-for="noti in getNotification" :key="noti.id" :noti="noti"/>
  </div>
</template>

<script>
import NotificationMessage from './NotificationMessage.vue';
import {mapGetters} from 'vuex'
export default {
components:{
    NotificationMessage,
},
computed:mapGetters(['getNotification'])
}
</script>

<style>
.notification{
    position:fixed;
    right:0;
    bottom:0;
    margin-right:20px;
    width:350px;
}
</style>