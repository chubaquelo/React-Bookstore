const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookData = [
  { id: 1, title: 'one', category: 'cat' },
  { id: 2, title: 'two', category: 'cat' },
];

const bookReducer = (state = bookData, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK: {
      return [...state].filter(book => book.id !== action.payload);
    }
    default:
      return state;
  }
};

export default bookReducer;
