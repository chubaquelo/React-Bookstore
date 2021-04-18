const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_BOOKS':
      return action.payload;
    case 'GET_USER_BOOKS_ERROR':
      throw action.payload;
    case 'DELETE_USER_BOOK':
      return state.filter(el => el.id !== action.payload);
    case 'DELETE_USER_BOOK_ERROR':
      throw action.payload;
    case 'CREATE_USER_BOOK':
      return [...state, action.payload];
    case 'CREATE_USER_BOOK_ERROR':
      throw action.payload;
    case 'UPDATE_BOOK_PROGRESS': {
      const editedState = [...state];
      const selectedBook = editedState.filter(
        book => book.id === action.payload,
      )[0];
      selectedBook.progress = selectedBook.progress <= 95 ? (Number(selectedBook.progress) + 5).toString() : '100';
      return editedState;
    }
    case 'UPDATE_BOOK_PROGRESS_ERROR':
      throw action.payload;
    default:
      return state;
  }
};

export default bookReducer;
