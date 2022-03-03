const InvoicePage = () => {
  const { slug } = useParams();
  return (
    <>
      <h2> Invoice {slug} displayed Here </h2>
    </>
  );
};

export default InvoicePage;
