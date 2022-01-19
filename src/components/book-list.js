import React from 'react';
import Book from './one-book';
// import { useGetBooksQuery } from '../redux/configureAPI';

const BooksList = () => {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return bookList.loading ? (
    <div id="books-list">Loading...</div>
  ) : userData.error ? (
    <div id="books-list">{userData.error}</div>
  ) : (
    bookList.map((book) => (
      <Book
        title={book.title}
        author={book.author}
        id={book.id}
        key={book.id}
        progress={book.progress}
        category={book.category}
      />
    ))
  );
};
export default BooksList;
