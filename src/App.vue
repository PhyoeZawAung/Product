<template>
  <div id="app">
    <nav-bar></nav-bar>
    
    <router-view></router-view>
    <notification-list/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import NotificationList from './components/NotificationList.vue';

export default {
  name: 'App',
  components: {
    NavBar,NotificationList
  }
}

</script>

