import * as Types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case Types.CREATE_AUTHOR_SUCCESS: {
      return [...state, ...action.author];
    }
    case Types.LOAD_AUTHORS_SUCCESS: {
      return action.authors;
    }
    default:
      return state;
  }
}
