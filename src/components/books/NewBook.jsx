import { connect } from "react-redux";
import PropType from "prop-types";
import * as bookActions from "../../redux/actions/bookActions";
import * as authorActions from "../../redux/actions/authorActions";
import * as items from "../../api/initItems";
import { useEffect, useState } from "react";
import BookFormRender from "./BookFormRender";
import { Navigate, useNavigate } from "react-router-dom";

const NewBook = ({ authors, saveBook, loadAuthors, history }) => {
  const [book, setBook] = useState(items.newBook);
  let navigate = useNavigate();

  useEffect(() => {
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("error Message is " + error);
      });
    }
  }, [authors]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setBook((prevBook) => {
      return {
        ...prevBook,
        [name]: name === "authorId" ? parseInt(value, 10) : value,
      };
    });
  };

  function handleSave(event) {
    event.preventDefault();

    saveBook(book).then(() => {
      navigate("/books", { replace: true });
    });
  }

  return (
    <>
      <h2> New Book Form Displayed Here </h2>
      <BookFormRender
        book={book}
        authors={authors}
        handleChange={handleChange}
        handleSave={handleSave}
        editMode="true"
      ></BookFormRender>
      <button onClick={() => showListView()}>Show Book List</button>
    </>
  );
};

function mapStateToProps(state) {
  return {
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  saveBook: bookActions.saveBook,
  loadAuthors: authorActions.loadAuthors,
};

NewBook.propTypes = {
  authors: PropType.array.isRequired,
  saveBook: PropType.func.isRequired,
  loadAuthors: PropType.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBook);
