import { createStore, combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({
  book: bookReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer);

export default store;
