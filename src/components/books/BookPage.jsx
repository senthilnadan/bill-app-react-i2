const BookPage = () => {
  const { slug } = useParams();
  return (
    <>
      <h2> Book {slug} displayed Here </h2>
    </>
  );
};

export default BookPage;
