import { handleResponse, handleError } from "./apiUtils";
import authService from "../services/AuthService";

const baseUrl = process.env.API_URL + "/api/users";

export function getUsers() {
  return fetch(baseUrl, {
    headers: authService.getAuthHeader()
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getUserById(id) {
  return fetch(baseUrl + "/" + id, {
    headers: authService.getAuthHeader()
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveUser(user) {
  return fetch(baseUrl, {
    method: "POST",
    headers: authService.getAuthHeader(),
    body: JSON.stringify({
      ...user
    })
  })
    .then(handleResponse)
    .catch(handleError);
}
