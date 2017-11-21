<template>
  <div class='grid-winboard'>
  <v-container fluid grid-list-xl text-xs-left>
  <v-layout row wrap>
    <v-flex xs12>
   <h1 class='headline mb-2'>Your Winboard</h1>
   <hr class='mb-3'></hr>
 </v-flex>
   <v-flex xs3>
   <v-card class="card-content">
    <v-card-title >
       <v-btn dark @click.stop="dialog2 = true">Add Win</v-btn>
    </v-card-title>
   </v-card>
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
           <h4>{{win.User.name}}</h4>
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
   <v-layout row justify-center >
   <v-dialog v-model="dialog2" max-width="500px">
           <v-card color="grey lighten-4" flat>
             <v-card-title>
               <v-toolbar>
                 <v-toolbar-title>Form Add Win</v-toolbar-title>
               </v-toolbar>
             </v-card-title>
             <v-card-text class="pl-4 pr-4 pt-2 pb-2">
               <v-card-media v-bind:src='add_source' style="border: 1px solid black;" height="200px"></v-card-media>
               <v-text-field v-model="add_title" label="Title"></v-text-field>
               <v-text-field label="Source" v-on:blur="source"></v-text-field>
             </v-card-text>
           <v-card-actions class="pl-4 pr-4 pt-2 pb-2">
             <div v-html="add_error"></div>
             <v-btn dark @click.stop="dialog2=false">Close</v-btn>
             <v-spacer></v-spacer>
             <v-btn dark @click="add_win">Add</v-btn>
             </v-card-actions>
           </v-card>
         </v-dialog>
   </v-layout>
  </div>
</template>
<script>
import WinsService from '@/services/WinsService'
export default {
  data: () => ({
    dialog2: false,
    add_title: null,
    add_source: null,
    add_error: null,
    wins: null
  }),
  methods: {
    source: function (event) {
      this.add_source = event.target.value
    },
    async add_win () {
      try {
        await WinsService.create({
          title: this.add_title,
          source: this.add_source
        })
      } catch (err) {
        this.add_error = err.response.data.error
      }
    }
  },
  async mounted () {
    const wins = (await WinsService.yourwins()).data
    console.log(wins)
    this.wins = wins
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
