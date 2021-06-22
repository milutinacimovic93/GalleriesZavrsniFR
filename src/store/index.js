import Vue from 'vue';
import Vuex from 'vuex';
import gallerie from './gallerie';
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    gallerie,
  },
}); 