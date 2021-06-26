<template>
   <div>
    <h1>My galleries: </h1>
    <h3><div v-for="(gallerie, index) in this.singleUser.galleries" :key="index">
      <b>Name: </b>{{ gallerie.name }} 
      <br>
      <b>Description:</b>{{ gallerie.description }} 
      <br>
      <b>Created at: </b>{{ gallerie.created_at }}
      <br>
      <img 
    width="150px"
    height="150px"
    v-bind:src="gallerie.images[0].source"
    :key="index"></div></h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters('auth', ['activeUser']),
    ...mapGetters('user', ['singleUser'] ),
  },
  methods: {
    ...mapActions('auth', ['getActiveUser']),
    ...mapActions('user', ['getSingleUser']),
    ...mapActions( 'gallerie',['getGalleries']),
  },
    async created() {

    await this.getActiveUser();

    await this.getSingleUser(this.activeUser.id);

    console.log(this.activeUser);
  },
 
};
</script>

<style scoped></style>