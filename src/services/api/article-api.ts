import services from "..";

export default class ArticleApi {
  static async create(payload: any) {
    console.log("api", payload);
    return services.post("/articles/upload", payload, {
      headers: {
        // Authorization: "Bearer " + localStorage.getItem("blog-token"),
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": "multipart/form-data",
      },
    });
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
