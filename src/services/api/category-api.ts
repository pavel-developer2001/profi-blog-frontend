import services from "..";

export default class CategoryApi {
  static async findAll() {
    return services.get("/categories/");
  }
}
