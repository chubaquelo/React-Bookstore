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
    case 'UPDATE_BOOK_PROGRESS':
    {
      // const selectedBook = state.filter(book => book.id === action.payload)[0];
      // selectedBook.progress = (Number(selectedBook.progress) + 5).toString();
      // console.log(state);
      // window.console.log(selectedBook.progress);
      // window.console.log(state.filter(book => book.id === action.payload)[0]);
      break;
    }
    default:
      return state;
  }
  return state;
};

export default bookReducer;
