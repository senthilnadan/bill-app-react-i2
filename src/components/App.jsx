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

const NewInvoice = () => {
  return (
    <>
      <h2> New Invoice Form Displayed Here</h2>
    </>
  );
};

const InvoicePage = () => {
  const { slug } = useParams();
  return (
    <>
      <h2> Invoice {slug} displayed Here </h2>
    </>
  );
};

const InvoiceList = () => {
  return (
    <>
      <h3>Invoice List Appears Here</h3>
      <ul>
        <li>
          <Link to="/invoices/invoice1">invoice 1</Link>
        </li>
        <li>
          <Link to="/invoices/invoice2">invoice 2</Link>
        </li>
      </ul>
    </>
  );
};

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

const NewCustomer = () => {
  return (
    <>
      <h2> New Customer Form Displayed Here</h2>
    </>
  );
};

const CustomerPage = () => {
  const { slug } = useParams();
  return (
    <>
      <h2> Customer {slug} displayed Here </h2>
      <Link to={"/customers/" + slug + "/invoices"}> Invoices for {slug} </Link>
      <Outlet />
    </>
  );
};

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

const NewAuthor = () => {
  return (
    <>
      <h2> New Author Form Displayed Here</h2>
    </>
  );
};

const CustomerList = () => {
  return (
    <>
      <h3>Customer List Appears Here</h3>
      <ul>
        <li>
          <Link to="/customers/customer1">Customer 1</Link>
        </li>
        <li>
          <Link to="/customers/customer2">Customer 2</Link>
        </li>
      </ul>
    </>
  );
};

const AuthorPage = () => {
  const { slug } = useParams();
  return (
    <>
      <h2> Book {slug} displayed Here </h2>
    </>
  );
};

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

const NewBook = () => {
  return (
    <>
      <h2> New Book Form Displayed Here</h2>
      <button onClick={() => showListView()}>Show Book List</button>
    </>
  );
};

const BookPage = () => {
  const { slug } = useParams();
  return (
    <>
      <h2> Book {slug} displayed Here </h2>
    </>
  );
};

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
