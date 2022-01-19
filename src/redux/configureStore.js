import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { apiSlice } from './configureAPI';
import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, apiSlice.middleware),
);

export default store;
