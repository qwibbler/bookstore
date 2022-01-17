import React from 'react';

const AddBook = () => (
  <form>
    <input type="text" placeholder="Book Title" />
    <input type="select" placeholder="Category" />
    <input type="button" value="Add Book" />
  </form>
);
export default AddBook;
