import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';
import './css/add-book.css';

const AddBook = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'category')
      e.target.classList.toggle('placeholder', false);
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
        category: '',
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
        <select
          name="category"
          className="placeholder"
          onChange={handleChange}
          required
        >
          <option value="" disabled selected hidden>
            Category
          </option>
          <option value="unsorted">Unsorted</option>
          <option value="Fiction">Fiction</option>
          <option value="Nonfiction">Nonfiction</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" onClick={submitBookToStore}>
          Add Book
        </button>
      </div>
    </form>
  );
};
export default AddBook;
