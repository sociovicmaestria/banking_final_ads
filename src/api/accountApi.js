import { handleResponse, handleError } from "./apiUtils";
import authService from "../services/AuthService";

const baseUrl = process.env.API_URL + "/api/accounts";

export function getAccounts() {
  return fetch(baseUrl, {
    headers: authService.getAuthHeader()
  })
    .then(handleResponse)
    .catch(handleError);
}

export function lockedAccount(account) {
  return fetch(baseUrl + '/locked', {
    method: "POST",
    headers: authService.getAuthHeader(),
    body: JSON.stringify({
      ...account
    })
  })
    .then(handleResponse)
    .catch(handleError);
}