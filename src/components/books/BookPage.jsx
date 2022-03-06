import { useParams } from "react-router-dom";
import PropType from "prop-types";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import * as authorActions from "../../redux/actions/authorActions";
import { useState, useEffect } from "react";
import BookFormRender from "./BookFormRender";

const BookPage = ({
  books,
  authors,
  loadBooks,
  loadAuthors,
  saveBook,
  ...props
}) => {
  const { slug } = useParams();
  const [book, setBook] = useState({});
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    if (books.length === 0) {
      loadBooks().catch((error) => {
        alert("error Message is " + error);
      });
    } else setBook(getBookFromSlug(books, slug));
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("error Message is " + error);
      });
    }
  }, [books, authors]);

  const getAuthorById = (authorId) => {
    if (authors.length > 0) {
      const author = authors.find((author) => +author.id === +authorId);
      return author && author.name;
    }
    return authorId;
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "authorId") {
      const newBook = { ...book, authorId: parseInt(value, 10) };
      const checkSpreadSyntaxBook = { ...book, ...newBook };

      setBook((prevBook) => {
        return {
          ...prevBook,
          [name]: name === "authorId" ? parseInt(value, 10) : value,
        };
      });
    }
  };

  function handleSave(event) {
    event.preventDefault();
    debugger;
    saveBook(book).then(() => {
      history.push("/books");
    });
  }
  function doDeleteBook() {
    alert("Are your sure you like to delete this book");
  }
  return (
    <>
      <button
        onClick={() => {
          setEditMode(true);
        }}
      >
        Edit Book
      </button>
      <button
        onClick={() => {
          doDeleteBook();
        }}
      >
        Delete Book
      </button>
      <BookFormRender
        book={book}
        authors={authors}
        editMode={editMode}
        handleChange={handleChange}
        handleSave={handleSave}
      ></BookFormRender>

      <h3> Title {book.title}</h3>
      <h3> Category {book.category}</h3>
      <h4>Author {getAuthorById(book.authorId)}</h4>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    books: state.books,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadBooks: bookActions.loadBooks,
  saveBook: bookActions.saveBook,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);

export function getBookFromSlug(books, slug) {
  const book = books.find((book) => book.slug === slug);
  return book;
}

BookPage.propType = {
  books: PropType.array.isRequired,
  authors: PropType.array.isRequired,
  loadAuthors: PropType.func.isRequired,
  loadBooks: PropType.func.isRequired,
  saveBook: PropType.func.isRequired,
};
