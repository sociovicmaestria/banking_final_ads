import * as loginApi from "../api/loginApi";
import * as userApi from "../api/userApi";

class AuthService {
  logIn(credentials) {
    return loginApi.login(credentials).then(loginUser => {
      this.saveUserInfo(loginUser);
      return loginUser;
    });
  }

  getUserByName(username) {
    return userApi.getUserByName(username).then(person => {
      this.savePersonInfo(person);
    });
  }

  savePersonInfo(person) {
    localStorage.setItem("personInfo", JSON.stringify(person));
  }

  getPersonInfo() {
    return JSON.parse(localStorage.getItem("personInfo"));
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
