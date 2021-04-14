const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

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
      return [...state, action.payload];
      // window.console.log(action.payload);
      // break;
    case 'GET_USER_BOOKS_ERROR':
      window.console.log('Error when fetching books. (from reducer):');
      window.console.log(action.payload);
      break;
    case CREATE_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK: {
      return [...state].filter(book => book.id !== action.payload);
    }
    default:
      return state;
  }
  return state;
};

export default bookReducer;
