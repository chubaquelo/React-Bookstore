// const bookData = [
//   { id: 1, title: 'Harry Potter I', category: 'Kids' },
//   { id: 2, title: 'Harry Potter II', category: 'Kids' },
//   { id: 3, title: 'Harry Potter III', category: 'Kids' },
//   { id: 4, title: 'Superman', category: 'Action' },
//   { id: 5, title: 'Frankestein', category: 'Horror' },
//   { id: 6, title: 'OVNI I', category: 'Sci-Fi' },
// ];

const bookData = [];

const bookReducer = (state = bookData, action) => {
  switch (action.type) {
    case 'GET_USER_BOOKS':
      return action.payload;
    case 'GET_USER_BOOKS_ERROR':
      return action.payload;
    case 'DELETE_USER_BOOK':
      window.console.log(action.payload);
      break;
    case 'DELETE_USER_BOOK_ERROR':
      window.console.log(action.payload);
      break;
    case 'CREATE_USER_BOOK':
      return [...state, action.payload];
    case 'CREATE_USER_BOOK_ERROR':
      window.console.log(action.payload);
      break;
    default:
      return state;
  }
  return state;
};

export default bookReducer;
