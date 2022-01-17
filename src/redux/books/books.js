import React from 'react';
// import Book from '../../components/book'
import AddBook from '../../components/add-book';

const Books = () => {
  // const books = [{
  //   title: 'Test Title',
  //   author: 'Test Author',
  //   category: 'Test Category',
  //   id: 'Test Id',
  //   progress: {
  //     current: 10,
  //     total: 50,
  //   },
  // }];

  return (
    <section className="books-section">
      {/* <Book
        title={books.title}
        author={books.author}
        id={books.id}
        progress={books.progress}
      /> */}
      <AddBook />
    </section>
  );
};
export default Books;
