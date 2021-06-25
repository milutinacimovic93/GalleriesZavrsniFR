<template>
  <div>
    <br />
    <h1>Galleries</h1>
    <br />
    <div v-for="(gallerie, index) in galleries" :key="index">
      <h2>
        Gallerie Name:
        <router-link :to="`/galleries/${gallerie.id}`">
          {{ gallerie.name }}</router-link>
      </h2><h4>
        Author: 
        <router-link :to="{ name: 'author', params: {id: gallerie.user.id }}">
          {{gallerie.user.name}}</router-link>
      </h4>
    <h3>Gallerie image:</h3>
    <img 
    width="150px"
    height="150px"
    v-bind:src="gallerie.images[0].source"
    :key="index">
    <br>
    <div class="description"><b>Description:</b> {{gallerie.description}}</div>
     <p><b>Created_at:</b> {{gallerie.created_at}}</p>

 </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'galleries',
  computed: {
    ...mapGetters('gallerie', ['galleries'] ),
  },
  methods: {
    ...mapActions( 'gallerie',['getGalleries'] ),
    ...mapActions( 'images',['getImages'] ),  
  },
  async created() {
    await this.getGalleries();
  },
};
</script>
<style scoped>

</style>