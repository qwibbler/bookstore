import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import { v4 as uuidv4 } from 'uuid';


const AddBook = () => {
  const dispatch = useDispatch()
  const submitBookToStore = () => {
    const title = document.getElementById('input-title');
    const author = document.getElementById('input-author');
    if (title.value) {
      const newBook = {
        id: uuidv4(),
        title: title.value,
        author: author.value || 'Anonymous',
      };
      title.value = '';
      author.value = '';
      dispatch(addBook(newBook));
    }
  };

  return (
  <form>
    <input type="text" id="input-title" placeholder="Book Title" required />
    by
    <input type="text" id="input-author" placeholder="Author" />
    <input type="select" placeholder="Category" disabled />
    <input type="submit" value="Add Book" onClick={submitBookToStore} />
  </form>
)};
export default AddBook;
