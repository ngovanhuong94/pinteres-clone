<template>
  <v-layout>
<<<<<<< HEAD
  <v-toolbar class="cyan app-top-navigation" light>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark :to="{name: 'register'}">
        Register
      </v-btn>
      <v-btn flat dark :to="{name: 'login'}">
=======
  <v-toolbar class="app-top-navigation" light>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat :to="{name: 'login'}">
>>>>>>> fb5c493b2fab726465c75cc9e9b0fba89da940c4
        Login
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</v-layout>
</template>

<script>
export default {
}
</script>
<style scoped>
.app-top-navigation {
  margin-bottom: 20px;
}
</style>
