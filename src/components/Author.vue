<template>
  <div>
    <h1>Author:</h1>
    <h3><b>Name:</b>{{this.singleUser.name}}</h3>
    <h3><b>Email:</b>{{this.singleUser.email}}</h3>
    <h3><b>Galleries by this user:</b><div v-for="(gallerie, index) in this.singleUser.galleries" :key="index">{{ gallerie.name }} <img 
    width="150px"
    height="150px"
    v-bind:src="gallerie.images[0].source"
    :key="index"></div></h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],
  computed: {
    ...mapGetters('user', ['singleUser']),
  },
  methods: {
    ...mapActions('user', ['getSingleUser']),
    ...mapActions( 'gallerie',['getGalleries'] ),
  },
  async created() {
    await this.getSingleUser(this.id);
  },
};
</script>

<style scoped></style> 