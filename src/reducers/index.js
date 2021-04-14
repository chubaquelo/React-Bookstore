import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books';
import filterReducer from './filter';
import sessionReducer from './sessions';

const rootReducer = combineReducers({
  book: bookReducer,
  filter: filterReducer,
  session: sessionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
