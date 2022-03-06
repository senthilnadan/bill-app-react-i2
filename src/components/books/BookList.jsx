import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as bookActions from "../../redux/actions/bookActions";
import * as authorActions from "../../redux/actions/authorActions";
import { useEffect } from "react";

const BookList = ({ books, authors, loadBooks, loadAuthors, ...props }) => {
  useEffect(() => {
    if (books.length === 0) {
      loadBooks().catch((error) => {
        alert("error Message is " + error);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("error Message is " + error);
      });
    }
  }, [books]);
  return (
    <>
      <h3>Book List Appears Here </h3>
      <table className="table">
        <thead>
          <tr>
            <th>link</th>
            <th>name</th>
            <th>authorName</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BookRow book={book} key={book.id}></BookRow>
          ))}
        </tbody>
      </table>
    </>
  );
};

function mapStateToProps(state) {
  return {
    authors: state.authors,
    books:
      state.authors.length > 0
        ? state.books.map((book) => {
            return {
              ...book,
              authorName: state.authors.find(
                (author) => author.id === book.authorId
              ).name,
            };
          })
        : state.books,
  };
}

const mapDispatchToProps = {
  loadBooks: bookActions.loadBooks,
  loadAuthors: authorActions.loadAuthors,
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  loadBooks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

const BookRow = ({ book }) => {
  return (
    <tr>
      <td>
        <Link to={"/books/" + book.slug}>{book.id}</Link>
      </td>
      <td>{book.title}</td>
      <td>{book.authorName}</td>
      <td>{book.category}</td>
    </tr>
  );
};
