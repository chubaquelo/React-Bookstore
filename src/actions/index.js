export const addBook = book => (
  {
    type: 'CREATE_BOOK',
    payload: book,
  }
);

export const removeBook = bookId => ({
  type: 'REMOVE_BOOK',
  payload: bookId,
});
