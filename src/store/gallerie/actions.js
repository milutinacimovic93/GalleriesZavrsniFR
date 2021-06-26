import gallerieService from '../../services/GallerieService';
export const actions = {

  async getGalleries(store) {

    const galleries = await gallerieService.getGalleries(store.state.searchTerm);
    store.commit('setGalleries', galleries);

  },

  async getOneGallerie(store, id) {
    const gallerie = await gallerieService.getGallerie(id);

    store.commit("setOneGallerie", gallerie);
  },


  async deleteGallerie(store, gallerie) {
      
    await gallerieService.deleteGallerie(gallerie.id);
    store.commit('deleteGallerie', gallerie);

  },

  
};