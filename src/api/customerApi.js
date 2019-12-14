import { handleResponse, handleError } from "./apiUtils";
import authService from "../services/AuthService";

const baseUrl = process.env.API_URL + "/api/persons";
const baseTransactionsUrl = process.env.API_URL + "/api/transactions/transfer";

export function getCustomers() {
  return fetch(baseUrl, {
    headers: authService.getAuthHeader()
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getCustomerById(id) {
  return fetch(baseUrl + "/" + id + "/accounts", {
    headers: authService.getAuthHeader()
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveCustomer(customer) {
  return fetch(baseUrl, {
    method: "POST",
    headers: authService.getAuthHeader(),
    body: JSON.stringify({
      ...customer
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveTransaction(transaction) {
  return fetch(baseTransactionsUrl, {
    method: "POST",
    headers: authService.getAuthHeader(),
    body: JSON.stringify({
      ...transaction
    })
  })
    .then(handleResponse)
    .catch(handleError);
}
