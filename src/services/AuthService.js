import $api from "../http";

export default class AuthService {
  static async login(email, password) {
    return $api.post("/v1/auth/login", { email, password });
  }

  static async sentResetEmail(email) {
    return $api.put("/v1/user/send_reset_code", { email });
  }

  static async checkResetCode(email, text) {
    return $api.put("/v1/user/check_reset_code", { email, text });
  }

  static async updatePassword(email, text, token) {
    return $api.put(
      "/v1/user/update_password",
      { email, text },
      { headers: { Authorization: `Bearer token ${token}` } }
    );
  }
}
