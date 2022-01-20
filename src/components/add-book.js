import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';
import './css/add-book.css';

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
        item_id: uuidv4(),
        title: state.title,
        author: state.author || 'Anonymous',
        category: state.category || 'Unsorted',
        progress: {
          current: 10,
          total: 50,
        },
      };
      dispatch(postBook(newBook));
      setState({
        title: '',
        author: '',
      });
    }
  };

  return (
    <form>
      <hr />
      <h2>ADD NEW BOOK</h2>
      <div className="inputs">
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
        <button type="submit" onClick={submitBookToStore}>
          Add Book
        </button>
      </div>
    </form>
  );
};
export default AddBook;
