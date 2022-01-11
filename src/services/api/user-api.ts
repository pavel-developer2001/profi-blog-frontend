import services from "..";

export default class UserApi {
  static async findOne(id: string) {
    return services.get("/users/" + id);
  }
}
