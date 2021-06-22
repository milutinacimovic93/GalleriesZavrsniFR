export const mutations = {  
    setGalleries(state, galleries) {    
        
        state.galleries = galleries;  

    },

    deleteGallerie(state, gallerie) {    
        
        state.galleries = state.galleries.filter((g) => g.id !== gallerie.id);  

    },

    setSearchTerm(state, searchTerm) {  

        state.searchTerm = searchTerm;  

    },

};