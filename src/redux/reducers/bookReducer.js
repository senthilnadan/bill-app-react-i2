import * as Types from "../actions/actionTypes";
import intialState from "./initialState";

export default function bookReducer(state = intialState.books, action) {
  switch (action.type) {
    case Types.CREATE_BOOK_SUCCESS: {
      return [...state, ...action.book];
    }
    case Types.LOAD_BOOKS_SUCCESS: {
      return action.books;
    }
    default:
      return state;
  }
}
