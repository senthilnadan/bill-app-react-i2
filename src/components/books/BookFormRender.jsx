const BookFormRender = ({
  book,
  authors,
  editMode,
  handleChange,
  handleSave,
}) => {
  if (book && authors.length > 0 && editMode)
    return (
      <BookForm
        book={book}
        authors={authors}
        onChange={handleChange}
        onSave={handleSave}
      ></BookForm>
    );
  return <h3>Waiting to load book and Authros </h3>;
};

export default BookFormRender;
