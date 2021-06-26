<template>
  <div v-if="gallerie">
    <h1>Gallerie</h1>
    <h2>Gallerie name: {{gallerie.name}}</h2>
    <h4>Author: <router-link :to="{ name: 'author', params: {id: gallerie.user.id }}">{{gallerie.user.name}}
      </router-link>
    </h4>
    <div class="description"><b>Description:</b> {{ gallerie.description }}</div>
    <p><b>Created at:</b> {{gallerie.created_at}}</p>
    <div>
      <b-carousel id="carousel-1" :interval="4000" controls indicators background="#ABABAB" img-width="1024"
        img-height="480" style="text-shadow: 1px 1px 2px #333;">
        <b-carousel-slide v-for="(image,index) in gallerie.images" :key="index" :img-src="image.source">
        </b-carousel-slide>
      </b-carousel>
    </div>
    <h2>Comments: </h2>
    <div v-for="(comment) in gallerie.comments" :key="comment.id">{{ comment.text }}</div>
    <br>

    <template v-if="isAuthenticated">
      <div>
        <form @submit.prevent="onSubmit()">
          Add comment:
          <textarea class="text" type="text" v-model="comment.text" name="text" id="text" cols="50" rows="3"
            required></textarea>

          <button type="submit" class="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </template>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from "vuex";

  export default {
    data() {
      return {
        comment: {
          gallery_id: this.id,
          text: "",
        },
        comments: [],
      };
    },
    props: ["id"],
    computed: {
      ...mapGetters('gallerie', ['gallerie']),
      ...mapGetters('auth', ['isAuthenticated']),
      ...mapGetters('auth', ['user'])
    },
    methods: {

      ...mapActions('gallerie', ['getOneGallerie']),
      ...mapActions('comment', ['getCommentsForGallerie']),
      ...mapActions('comment', ['addComment']),


      async onSubmit() {
      await this.addComment(this.comment);
      this.comments = await this.getCommentsForGallerie(this.id);
      this.comment.text = "";
    },
   },


    async created() {
      console.log('jedan')
      await this.getOneGallerie(this.id);
      console.log('dva')
      this.comments = await this.getCommentsForGallerie(this.id);
      console.log('tri')
      await this.$store.dispatch("auth/getActiveUser");

    },



  };
</script>

<style scoped>

</style>