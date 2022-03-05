import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as bookActions from "../../redux/actions/bookActions";
import { useEffect } from "react";

const BookList = ({ books, loadBooks, ...props }) => {
  useEffect(() => {
    if (books.length === 0) {
      loadBooks().catch((error) => {
        alert("error Message is " + error);
      });
    }
  });
  return (
    <>
      <h3>Book List Appears Here </h3>
      <table>
        <thead>
          <th>link</th>
          <th>name</th>
          <th>author</th>
          <th>category</th>
        </thead>
        {books.map((book) => (
          <BookRow book={book}></BookRow>
        ))}
      </table>
    </>
  );
};

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

const mapDispatchToProps = {
  loadBooks: bookActions.loadBooks,
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
      <td>{book.authorId}</td>
      <td>{book.category}</td>
    </tr>
  );
};
