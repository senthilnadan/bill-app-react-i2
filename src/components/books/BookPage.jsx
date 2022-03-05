import { useParams } from "react-router-dom";
import PropType from "prop-types";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import * as authorActions from "../../redux/actions/authorActions";
import { useState, useEffect } from "react";
import BookForm from "./BookForm";
const BookPage = ({ books, authors, loadBooks, loadAuthors, ...props }) => {
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
  }, [books, authors, book]);

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
      debugger;
      setBook((prevBook) => {
        return { ...prevBook, authorId: 2 };
      });
      debugger;
      alert("book " + JSON.stringify(book));
    }
  };

  function handleSave(event) {
    debugger;
    event.preventDefault();
    saveBook(book).then(() => {
      history.push("/books");
    });
  }
  return (
    <>
      <button
        onClick={() => {
          setEditMode(true);
        }}
      >
        Edit Book {JSON.stringify(book)}
      </button>
      <AddBookRender
        book={book}
        authors={authors}
        editMode={editMode}
        handleChange={handleChange}
        handleSave={handleSave}
      ></AddBookRender>

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

const AddBookRender = ({
  book,
  authors,
  editMode,
  handleChange,
  handleSave,
}) => {
  if (book && authors.length > 0 && editMode)
    return (
      <BookForm
        book={book}
        authors={authors}
        onChange={handleChange}
        onSave={handleSave}
      ></BookForm>
    );
  return <h3>Waiting to load book and Authros </h3>;
};
