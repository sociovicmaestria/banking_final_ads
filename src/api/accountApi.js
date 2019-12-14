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

export function getAccountsCustomer(personId) {
  return fetch(baseUrl + '/bycustomer/' + personId, {
    headers: authService.getAuthHeader()
  })
    .then(handleResponse)
    .catch(handleError);
}

export function openAccount(account, personId) {
  return fetch(baseUrl + '/' + personId + '/accounts', {
    method: "POST",
    headers: authService.getAuthHeader(),
    body: JSON.stringify({
      ...account
    })
  })
    .then(handleResponse)
    .catch(handleError);
}