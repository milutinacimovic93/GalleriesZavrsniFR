import gallerieService from '../../services/GallerieService';
export const actions = {

  async getGalleries(store) {

    const galleries = await gallerieService.getGalleries(store.state.searchTerm);
    store.commit('setGalleries', galleries);

  },
  async deleteGallery(store, gallerie) {
      
    await gallerieService.deleteGallery(gallerie.id);
    store.commit('deleteGallery', gallerie);

  },
};