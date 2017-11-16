<template>
<v-layout>
 <v-flex xs6 offset-xs3>
   <panel title="Register">
     <v-text-field
      label="Name" v-model="name"></v-text-field>
     <v-text-field
      label="Email" v-model="email"></v-text-field>
     <v-text-field
      label="Password" v-model="password"></v-text-field>
    <div class="danger-alert" v-html="error"></div>
    <v-btn dark @click="register">Register</v-btn>
   </panel>
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
<style scoped>
</style>
