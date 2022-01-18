import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    e.preventDefault();
    if (state.title) {
      const newBook = {
        id: uuidv4(),
        title: state.title,
        author: state.author || 'Anonymous',
      };
      dispatch(addBook(newBook));
      setState({
        title: '',
        author: '',
      });
    }
  };

  return (
    <form>
      <input
        type="text"
        id="input-title"
        name="title"
        placeholder="Book Title"
        value={state.title}
        onChange={handleChange}
        required
      />
      by
      <input
        type="text"
        id="input-author"
        name="author"
        placeholder="Author"
        value={state.author}
        onChange={handleChange}
      />
      <input type="select" placeholder="Category" disabled />
      <input type="submit" value="Add Book" onClick={submitBookToStore} />
    </form>
  );
};
export default AddBook;
