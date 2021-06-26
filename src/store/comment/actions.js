import commentService from "../../services/CommentService";

export const actions = {
  async addComment(store, text) {
    const { data } = await commentService.add(text);

    store.commit("addComments", data);
  },

  async getCommentsForGallerie(store, id) {
    return await commentService.getComments(id);
  },

  async deleteComment(store, id) {
   
    const data = await commentService.deleteComment(id);

    return data;
  },
};