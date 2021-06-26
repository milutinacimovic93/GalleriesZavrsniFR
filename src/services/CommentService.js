import BaseService from './BaseService';

class CommentService extends BaseService {
    
    async add(text) {
      const { data } = await this.http.post("/comments", text);
      console.log(text);
  
      return data;
    }
  
    async getComments(id) {
      const { data } = await this.http.get(`/galleries/${id}/comments`);
  
      console.log(data);
  
      return data;
    }
  
    async deleteComment(id) {
      console.log(id);
      const { data } = await this.http.delete(`/comments/${id}`);
  
      return data;
    }
  }
  
  const commentService = new CommentService();
  export default commentService;