import { getAuthors } from "../../api/authorApi";
import * as Types from "./actionTypes";
export function createAuthorAction(author) {
  return { type: Types.CREATE_AUTHOR_SUCCESS, author };
}

export function loadAuthorsSucess(authors) {
  return { type: Types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    return getAuthors()
      .then((books) => dispatch(loadAuthorsSucess(books)))
      .catch((error) => {
        throw error;
      });
  };
}
