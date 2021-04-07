export const addBook = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

export const removeBook = bookId => ({
  type: 'REMOVE_BOOK',
  payload: bookId,
});

export const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  payload: category,
});
