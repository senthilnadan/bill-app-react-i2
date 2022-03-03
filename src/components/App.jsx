import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  NavLink,
  useParams,
  Navigate,
  Link,
} from "react-router-dom";
import BookList from "./books/BookList";
import NewBook from "./books/NewBook";
import BookPage from "./books/BookPage";
import Books from "./books/Books";
import AuthorList from "./authors/AuthorsList";
import Authors from "./authors/Authors";
import AuthorPage from "./authors/AuthorPage";
import NewAuthor from "./authors/NewAuthor";
import Customers from "./customers/Customers";
import CustomerPage from "./customers/CustomerPage";
import CustomerList from "./customers/CustomerList";
import NewCustomer from "./customers/NewCustomer";
import InvoiceList from "./invoices/InvoicesList";
import InvoicePage from "./invoices/InvoicePage";
import Invoices from "./invoices/Invoices";
import NewInvoice from "./invoices/NewInvoice";

const App = () => {
  return (
    <Router>
      <Layout></Layout>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/books" element={<Books></Books>}>
          <Route index="true" element={<BookList></BookList>} />
          <Route path=":slug" element={<BookPage></BookPage>} />
          <Route path="new" element={<NewBook></NewBook>} />
        </Route>
        <Route path="/authors" element={<Authors></Authors>}>
          <Route index="true" element={<AuthorList></AuthorList>} />
          <Route path=":slug" element={<AuthorPage></AuthorPage>} />
          <Route path="new" element={<NewAuthor></NewAuthor>} />
        </Route>
        <Route path="/customers" element={<Customers></Customers>}>
          <Route index="true" element={<CustomerList></CustomerList>} />
          <Route path=":slug" element={<CustomerPage></CustomerPage>}>
            <Route path="invoices" element={<Invoices></Invoices>} />
          </Route>
          <Route path="new" element={<NewCustomer></NewCustomer>} />
        </Route>
        <Route path="/invoices" element={<Invoices></Invoices>}>
          <Route index="true" element={<InvoiceList></InvoiceList>} />
          <Route path=":slug" element={<InvoicePage></InvoicePage>} />
          <Route path="new" element={<NewInvoice></NewInvoice>} />
        </Route>
      </Routes>
    </Router>
  );
};

const Home = () => <h2>Home</h2>;

const Layout = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {" | "}
        <NavLink to="/books">Books</NavLink>
        {" | "}
        <NavLink to="/authors">Authors</NavLink>
        {" | "}
        <NavLink to="/customers">Customers</NavLink>
        {" | "}
        <NavLink to="/invoices">Invoice</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default App;
