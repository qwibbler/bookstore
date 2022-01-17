import React from 'react';
import PropTypes from 'prop-types';
import Progress from './progress';

const Book = (props) => {
  const {
    title, author, id, category, progress,
  } = props;
  return (
    <div className="book-wrapper" key={id}>
      <div className="book-details">
        <p className="category">{category}</p>
        <p className="book-title">{title}</p>
        <p className="author">{author}</p>
        <ul className="options">
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>
      <Progress progress={progress} />
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default Book;
