import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/api/users/login";

export function login(credentials) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...credentials
    })
  })
    .then(handleResponse)
    .catch(handleError);
}
