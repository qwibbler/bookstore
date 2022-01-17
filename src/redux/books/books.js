import React from 'react';
import Book from '../../components/book';
import AddBook from '../../components/add-book';

const Books = () => {
  const books = [
    {
      title: 'Test Title',
      author: 'Test Author',
      category: 'Test Category',
      id: 'Test Id',
      progress: {
        current: 10,
        total: 50,
      },
    },
  ];

  const arr = [];
  books.forEach((book) => {
    arr.push(
      <Book
        title={book.title}
        author={book.author}
        id={book.id}
        progress={book.progress}
      />,
    );
  });

  return (
    <section className="books-section">
      {arr}
      <AddBook />
    </section>
  );
};
export default Books;
