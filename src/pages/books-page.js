import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/one-book';
import AddBook from '../components/add-book';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);
  // BOOK TEMPLATE
  // title: 'Title',
  // author: 'Author',
  // category: 'Category',
  // id: uuidv4(),
  // progress: {
  //   current: 10,
  //   total: 50,

  return (
    <section className="books-section">
      <div id="books-list">
        {bookList.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            id={book.id}
            key={book.id}
            progress={book.progress}
            category={book.category}
          />
        ))}
      </div>
      <AddBook />
    </section>
  );
};
export default Books;
