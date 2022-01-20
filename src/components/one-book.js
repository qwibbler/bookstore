import React from 'react';
import PropTypes from 'prop-types';
import Progress from './progress';
import BookDetails from './book-details';
import './css/one-book.css';

const Book = (props) => {
  const {
    title, author, category, progress, id,
  } = props;
  return (
    <div className="book-wrapper">
      <BookDetails title={title} author={author} category={category} id={id} />
      <Progress progress={progress} />
    </div>
  );
};

Book.defaultProps = {
  author: 'Anonymous',
  category: 'Unsorted',
  progress: {
    current: 0,
    total: 0,
  },
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  id: PropTypes.string.isRequired,
  category: PropTypes.string,
  progress: PropTypes.objectOf(PropTypes.number),
};
export default Book;
