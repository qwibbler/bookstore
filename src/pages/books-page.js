import React from 'react';
import BooksList from '../components/book-list';
import AddBook from '../components/add-book';

// BOOK TEMPLATE
// title: 'Title',
// author: 'Author',
// category: 'Category',
// id: uuidv4(),
// progress: {
//   current: 10,
//   total: 50,

const Books = () => (
  <section className="books-section">
    <BooksList />
    <AddBook />
  </section>
);
export default Books;
