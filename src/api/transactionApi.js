import { handleResponse, handleError } from "./apiUtils";
import authService from "../services/AuthService";

const baseUrl = process.env.API_URL + "/api/transactions";

export function getTransactions() {
  return fetch(baseUrl, {
    headers: authService.getAuthHeader()
  })
    .then(handleResponse)
    .catch(handleError);
}