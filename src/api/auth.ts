import { apiFetch } from "./apiClient";

type LoginResponse = {
  token: string;
};

export const AuthAPI = {
  async login(username: string, password: string): Promise<LoginResponse> {
    return apiFetch<LoginResponse>("/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
  },

  logout() {
    localStorage.removeItem("token");
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  },
};
