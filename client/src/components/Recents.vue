<template>
<div class="grid-winboard">
<v-container fluid grid-list-xl text-xs-left>
 <v-layout no wrap>
  <v-flex xs12>
    <h1 class='headline mb-2'>Recents</h1>
    <hr class='mb-3'></hr>
  </v-flex>
  <v-flex xs3 v-for="win in wins" key="win.id">
    <v-card style="border-radius: 20px;">
       <v-card-media v-bind:src="win.source" height="200px" >
       </v-card-media>
       <v-card-title primary-title>
         <div>
           <h3 class="headline mb-0">{{win.title}}</h3>
         </div>
       </v-card-title>
       <v-card-actions>
         <div>
           <h4>username</h4>
         </div>
         <v-spacer></v-spacer>
         <v-btn icon>
                  <v-icon>favorite</v-icon>
         </v-btn>
       </v-card-actions>
     </v-card>
  </v-flex>
 </v-layout>
</v-container>
</div>
</template>
<script>
import WinsService from '@/services/WinsService'
export default {
  data () {
    return {
      wins: null
    }
  },
  async mounted () {
    this.wins = (await WinsService.index()).data
  }
}
</script>
<style scoped>
.grid-winboard {
  width: 80%;
  margin: 0 auto;
}
.card-content {
  border-radius: 20px;
}
</style>
