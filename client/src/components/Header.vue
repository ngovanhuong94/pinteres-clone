<template>
  <v-layout>
  <v-toolbar class="app-top-navigation" light>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat :to="{name: 'login'}">
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
