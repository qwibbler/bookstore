import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import './css/book-details.css';

const BookDetails = (props) => {
  const {
    title, author, category, id,
  } = props;
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="book-details">
      <p className="category">{category}</p>
      <p className="book-title">{title}</p>
      <p className="author">{author}</p>
      <ul className="options">
        <li><button type="button">Comments</button></li>
        <li><hr /></li>
        <li><button type="button" onClick={remove}>Remove</button></li>
        <li><hr /></li>
        <li><button type="button">Edit</button></li>
      </ul>
    </div>
  );
};
BookDetails.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default BookDetails;
