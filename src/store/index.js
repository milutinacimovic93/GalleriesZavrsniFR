import Vue from 'vue';
import Vuex from 'vuex';
import gallerie from './gallerie';
import auth from './auth';
import image from './image';
import user from './user';
import comment from './comment';


Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    gallerie,
    auth,
    image,
    user,
    comment,
  },
});