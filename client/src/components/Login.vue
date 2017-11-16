<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
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
    </v-flex>
  </v-layout>
</template>

<script>
export default {
}
</script>
<style scoped>
</style>
