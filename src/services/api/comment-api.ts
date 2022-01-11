import services from "..";

export default class CommentApi {
  static async create(payload: { text: string; articleId: number }) {
    return services.post("/comments/", payload);
  }
  static async findByArticle(id: string) {
    return services.get("/comments/?id=" + id);
  }
}
