import services from "..";

export default class ArticleApi {
  static async create(payload: any) {
    return services.post("/articles/", payload);
  }
  static async findAll() {
    return services.get("/articles/");
  }
  static async findOne(id: string) {
    return services.get("/articles/" + id);
  }
}
