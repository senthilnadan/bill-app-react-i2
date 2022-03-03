import { Link } from "react-router-dom";
const AuthorList = () => {
  return (
    <>
      <h3>Author List Appears Here</h3>
      <ul>
        <li>
          <Link to="/authors/book1">Author 1</Link>
        </li>
        <li>
          <Link to="/authors/book2">Author 2</Link>
        </li>
      </ul>
    </>
  );
};

export default AuthorList;
