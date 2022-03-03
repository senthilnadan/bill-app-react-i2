import { Link } from "react-router-dom";
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

export default InvoiceList;
