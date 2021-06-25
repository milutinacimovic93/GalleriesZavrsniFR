import BaseService from './BaseService';

class GallerieService extends BaseService {

  async getGalleries(name) {
    
    const { data } = await this.http.get('/galleries', { params: { name }});
    
    return data;

  }

  async getGallerie(id) {
    
    const { data }  = await this.http.get(`/galleries/${id}`);
    
    return data;

  }

  async createGallerie(gallerie) {
    
    const { data } = await this.http.post('galleries', gallerie);
    
    return data;

  }

  async updateGallerie(id, gallerie) {
    
    const { data } = await this.http.put(`/galleries/${id}`, gallerie);
    
    return data;

  }

  async deleteGallerie(id) {
    
    const { data } = await this.http.delete(`/gallerie/${id}`);
    
    return data;

  }
}

const gallerieService = new GallerieService();

export default gallerieService;