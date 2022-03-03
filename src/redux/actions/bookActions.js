import * as Types from "./actionTypes";

export function loadBooksAction(books) {
  return { type: Types.LOAD_BOOKS_SUCCESS, books };
}

export function createBookAction(book) {
  return { type: Types.CREATE_BOOK_SUCCESS, book };
}
