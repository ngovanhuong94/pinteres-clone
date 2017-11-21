<template>
  <v-layout column>
   <v-flex xs6 offset-xs3>
     <div class="white elevation">
      <v-toolbar flat dense dark class='grey lighten-4'>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
           label="Email"
           v-model='email'
           ></v-text-field>
           <v-text-field
            label="password"
            type='password'
            v-model='password'
            ></v-text-field>
            <div class='danger-alert' v-html='error'></div>
            <v-btn dark @click='login'>Login</v-btn>
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
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        console.log('logged in !!!')
        this.$router.push({
          name: 'winboard'
        })
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>
<style scoped></style>
