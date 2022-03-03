import { NavLink, Outlet } from "react-router-dom";

const Books = () => {
  return (
    <>
      <h2>Booklist gets Displayed Here</h2>
      <nav>
        <NavLink to="/books/new"> AddBook</NavLink>
        {" | "}
        <NavLink to="/books/"> ListBook</NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default Books;
