import { Link } from "react-router-dom";

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

export default CustomerList;
