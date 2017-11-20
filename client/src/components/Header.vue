<template>
  <v-toolbar>
   <v-toolbar-title ><router-link tag='span' to="home">Winterest</router-link></v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn
    dark
    :to="{name: 'login'}">
   <v-icon class="">perm_identity</v-icon>Login
  </v-btn>
  <v-btn
    dark
    :to="{name: 'register'}">
   <v-icon class="">supervisor_account</v-icon>Sign up
  </v-btn>
  </v-toolbar>
</template>
<script>
  export default {
  }
</script>
<style scoped></style>
