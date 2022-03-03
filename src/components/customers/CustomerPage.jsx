import { Link, Outlet } from "react-router-dom";
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

export default CustomerPage;
