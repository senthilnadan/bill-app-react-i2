import { NavLink, Outlet } from "react-router-dom";
const Invoices = () => {
  return (
    <>
      <h2>All about Invoices</h2>
      <nav>
        <NavLink to="/invoices/new"> Addinvoice</NavLink>
        {" | "}
        <NavLink to="/invoices/"> Listinvoice</NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default Invoices;
