import * as Types from "./actionTypes";
import { getBooks, saveBooks } from "../../api/booksApi";

export function loadBooksSuccess(books) {
  return { type: Types.LOAD_BOOKS_SUCCESS, books };
}

export function updateBookSucess(book) {
  return { type: types.UPDATE_BOOK, book };
}

export function createBookSucess(book) {
  return { type: Types.CREATE_BOOK_SUCCESS, book };
}

export function loadBooks() {
  return function (dispatch) {
    return getBooks()
      .then((books) => dispatch(loadBooksSuccess(books)))
      .catch((error) => {
        throw error;
      });
  };
}

export function saveBook(book) {
  return function (dispatch) {
    return saveBooks(book).then((savedBook) => {
      book.id
        ? dispatch(updateBookSucess(savedBook))
        : dispatch(createBookSucess(savedBook));
    });
  };
}
