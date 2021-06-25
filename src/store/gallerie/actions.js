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


  async deleteGallery(store, gallerie) {
      
    await gallerieService.deleteGallery(gallerie.id);
    store.commit('deleteGallery', gallerie);

  },

  
};