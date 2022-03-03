import { NavLink, Outlet } from "react-router-dom";
const Authors = () => {
  return (
    <>
      <h2> Everything About our Authors </h2>
      <nav>
        <NavLink to="/authors/new"> AddAuthor</NavLink>
        {" | "}
        <NavLink to="/authors/"> ListAuthor</NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default Authors;
