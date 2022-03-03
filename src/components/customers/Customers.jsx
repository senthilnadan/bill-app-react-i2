import { NavLink } from "react-router-dom";

const Customers = () => {
  return (
    <>
      <h2>All about Customers</h2>
      <nav>
        <NavLink to="/customers/new"> AddCustomer</NavLink>
        {" | "}
        <NavLink to="/customers/"> ListCustomer</NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default Customers;
