<template>
 <div class="white elevation">
   <v-toolbar>
     <v-toolbar-title>{{title}}<v-toolbar-title>
   </v-toolbar>
   <slot class="pl-4 pr-4 pt-2 pb-2">
   </slot>
 </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>
<style scoped>
</style>
