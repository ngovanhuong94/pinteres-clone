<template>
  <v-toolbar>
   <v-toolbar-title ><router-link tag='span' to="home">Winterest</router-link></v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn
    v-if="!$store.state.isUserLoggedIn"
    flat
    :to="{name: 'login'}">
   <v-icon class="">perm_identity</v-icon>Login
  </v-btn>
  <v-btn
    v-if="!$store.state.isUserLoggedIn"
    flat
    :to="{name: 'register'}">
   <v-icon class="">supervisor_account</v-icon>Sign up
  </v-btn>
  <v-btn
    v-if="$store.state.isUserLoggedIn"
    flat
    :to="{name: 'winboard'}">
   <v-icon class="">view_list</v-icon>Your Wins
  </v-btn>
  <v-btn
    v-if="$store.state.isUserLoggedIn"
    flat
    :to="{name: 'recents'}">
   <v-icon class="">query_builder</v-icon>Recents
  </v-btn>
  <v-btn
    v-if="$store.state.isUserLoggedIn"
    flat
    @click="logout">
   <v-icon class="">exit_to_app</v-icon>Logout
  </v-btn>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    logout: function () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>
<style scoped></style>
