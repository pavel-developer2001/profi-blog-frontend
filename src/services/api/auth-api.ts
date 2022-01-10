import services from "..";

export default class AuthApi {
  static async register(payload: {
    name: string;
    email: string;
    password: string;
  }) {
    return services.post("/auth/register", payload);
  }

  static async login(payload: { email: string; password: string }) {
    return services.post("/auth/login", payload);
  }
}
