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
//   total: 50, }

const Books = () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.firstChild.classList.toggle('active', true);
    nav.lastChild.classList.toggle('active', false);
  }
  return (
    <section className="books-section">
      <BooksList />
      <AddBook />
    </section>
  );
};
export default Books;
