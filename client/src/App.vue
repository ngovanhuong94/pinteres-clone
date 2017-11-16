<template>
  <div id="app">
    <page-header />
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
<<<<<<< HEAD
.danger-alert {
color: red;
}
=======
>>>>>>> fb5c493b2fab726465c75cc9e9b0fba89da940c4
</style>
