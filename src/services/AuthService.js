import * as loginApi from "../api/loginApi";

class AuthService {
  logIn(credentials) {
    return loginApi.login(credentials).then(loginUser => {
      this.saveUserInfo(loginUser);
      return loginUser;
    });
  }

  saveUserInfo(credentials) {
    localStorage.setItem("userInfo", JSON.stringify(credentials));
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }

  getAuthHeader() {
    return {
      "content-type": "application/json",
      Authorization: "Bearer " + this.getUserInfo().bearerToken
    };
  }

  logOut() {
    localStorage.removeItem("userInfo");
  }
}

export default new AuthService();
