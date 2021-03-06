import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './one-book';
import { fetchBooks } from '../redux/books/books';

const BooksList = () => {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

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
        id={book.item_id}
        key={book.item_id}
        progress={book.progress}
        category={book.category}
      />
    ));
  }
  return <div id="books-list">{content}</div>;
};
export default BooksList;
