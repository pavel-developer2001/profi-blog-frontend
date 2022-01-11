import services from "..";

export default class ArticleApi {
  static async create(payload: { title: string; text: string }) {
    return services.post("/articles/", payload);
  }
  static async findAll() {
    return services.get("/articles/");
  }
  static async findOne(id: string) {
    return services.get("/articles/" + id);
  }
  static async update(id: string, payload: { title: string; text: string }) {
    return services.patch("/articles/" + id, payload);
  }
  static async remove(id: string) {
    return services.delete("/articles/" + id);
  }
}
