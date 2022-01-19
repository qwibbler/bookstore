import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './one-book';
import { fetchBooks } from '../redux/thunk/thunk';

const BooksList = () => {
  const bookList = useSelector((state) => state.booksList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  console.log('BOOKS LIST', bookList.books);
  let content;

  if (bookList.loading) {
    content = 'Loading...';
  } else if (bookList.error) {
    content = `Error: ${bookList.error}`;
  } else {
    content = bookList.books ? bookList.books.map((book) => (
      <Book
        title={book.title}
        author={book.author}
        id={book.id}
        key={book.id}
        progress={book.progress}
        category={book.category}
      />
    )) : null;
  }
  return <div id="books-list">{content}</div>;
};
export default BooksList;
