<template>
<v-layout>
  <v-container text-xs-left>
   <h1 class='headline mb-2'>Your Winboard</h1>
   <hr class='mb-3'></hr>
 <v-flex xs12 sm6 offset-sm3>
  <v-card>
    <v-card-media src='https://i.pinimg.com/736x/3a/e8/47/3ae8477b5e50c9a3a386ea57cc7c850e--beautiful-view-beautiful-photos.jpg' height='200px'></v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class='headline mb-0'>Kangoroo Valley Safari</h3>
      </div>
    </v-card-title>
    <v-card-actions class="white">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
    </v-card-actions>
  </v-card>
 </v-flex>
   </v-container>
</v-layout>
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: '/static/doc-images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: '/static/doc-images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 6 }
      ]
    })
  }
</script>
<style scoped>

.card-content {
  border-radius: 20px;
}
</style>
