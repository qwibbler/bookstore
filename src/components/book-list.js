import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../redux/configureStore';
import Book from './one-book';
import { fetchBooks } from '../redux/thunk/thunk';

const BooksList = () => {
  const bookList = useSelector((state) => state.booksList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  
  console.log(store.getState(), bookList);
  let content;

  if (bookList.loading) {
    content = 'Loading...';
  } else if (bookList.error) {
    content = `Error: ${bookList.error}`;
  } else {
    content = bookList.books.map((book) => (
      <Book
        title={book.title}
        author={book.author}
        id={book.id}
        key={book.id}
        progress={book.progress}
        category={book.category}
      />
    ));
  }
  return <div id="books-list">{content}</div>;
};
export default BooksList;
