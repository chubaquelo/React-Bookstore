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
    default:
      return state;
  }
};

export default bookReducer;
