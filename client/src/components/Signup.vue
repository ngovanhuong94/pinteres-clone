<template>
  <v-layout column>
   <v-flex xs6 offset-xs3>
     <div class="white elevation">
      <v-toolbar flat dense dark class='grey lighten-4'>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
             label="Name" v-model="name"></v-text-field>
            <v-text-field
             label="Email" v-model="email"></v-text-field>
            <v-text-field
             label="Password" v-model="password"></v-text-field>
            <div class="danger-alert" v-html="error"></div>
            <v-btn dark @click="register">Register</v-btn>
        </div>
     </div>
   </v-flex>
  </v-layout>

</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      name: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          name: this.name,
          email: this.email,
          password: this.password
        })
        this.$router.push({
          name: 'login'
        })
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>
<style scoped></style>
