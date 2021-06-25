<template>
    <div v-if="gallerie">
        <h1>Gallerie</h1>
        <h2>Gallerie name: {{gallerie.name}}</h2>
        <h4>Author: <router-link :to="{ name: 'author', params: {id: gallerie.user.id }}">{{gallerie.user.name}}</router-link></h4>
        <div class="description"><b>Description:</b> {{ gallerie.description }}</div>
        <p><b>Created at:</b> {{gallerie.created_at}}</p>
        <div>
             <b-carousel
                id="carousel-1"
                :interval="4000"
                controls
                indicators
                background="#ABABAB"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                >
                     <b-carousel-slide v-for="(image,index) in gallerie.images" :key="index"   :img-src="image.source">
                     </b-carousel-slide>
         </b-carousel>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  props: ['id'],
  computed: {
    ...mapGetters('gallerie', ['gallerie']),
  },
  methods: {
    ...mapActions('gallerie', ['getOneGallerie']),
  
  },
  async created() {
    console.log('usao sam.')
    await this.getOneGallerie(this.id);
  },

  

};
</script>

<style scoped>

</style>