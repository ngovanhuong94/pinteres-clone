<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
<<<<<<< HEAD
       <panel title="Login">
=======
>>>>>>> fb5c493b2fab726465c75cc9e9b0fba89da940c4
         <v-text-field
           label="Email"
           v-model="email"
         ></v-text-field>
          <v-text-field
          label="Password"
          type="password"
          v-model="password"></v-text-field>
          <div class="danger-alert" v-html="error"></div>
          <v-btn dark
         @click="login">Login</v-btn>
<<<<<<< HEAD
       </panel>
=======
>>>>>>> fb5c493b2fab726465c75cc9e9b0fba89da940c4
    </v-flex>
  </v-layout>
</template>

<script>
export default {
}
</script>
<style scoped>
</style>
