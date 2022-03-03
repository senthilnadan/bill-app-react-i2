import { Link } from "react-router-dom";

const BookList = () => {
  return (
    <>
      <h3>Book List Appears Here</h3>
      <ul>
        <li>
          <Link to="/books/book1">Book1</Link>
        </li>
        <li>
          <Link to="/books/book2">Book2</Link>
        </li>
      </ul>
    </>
  );
};

export default BookList;
