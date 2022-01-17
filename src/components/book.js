import React from 'react';
import Progress from './progress';

const Book = props => (
  <div className="book-wrapper" key={props.key}>
    <div className="book-details">
      <p className="category">{props.category}</p>
      <p className="book-title">{props.title}</p>
      <p className="author">{props.author}</p>
      <ul className="options">
        <li>Comments</li>
        <li>Remove</li>
        <li>Edit</li>
      </ul>
    </div>
    <Progress progress={props.progress} />
  </div>
);
export default Book;
