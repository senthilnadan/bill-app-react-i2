import * as Types from "./actionTypes";
export function createAuthorAction(author) {
  return { type: Types.CREATE_AUTHOR_SUCCESS, author };
}

export function loadAuthorsAction(authors) {
  return { type: Types.LOAD_AUTHORS_SUCCESS, authors };
}
