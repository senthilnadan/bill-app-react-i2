import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/books/";

export function getBooks() {
  console.log("Hello " + baseUrl);
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveBooks(elements) {
  return fetch(baseUrl + (course.id || ""), {
    method: element.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(elements),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteBooks(elementId) {
  return fetch(baseUrl + elementId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
