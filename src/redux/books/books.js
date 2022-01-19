const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
const POST_BOOK = 'bookStore/books/POST_BOOKS_SUCCESS';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOADING = 'bookStore/books/LOADING';
const ERROR = 'bookStore/books/ERROR';

// const DELETE_BOOKS_SUCCESS = 'bookStore/books/DELETE_BOOKS_SUCCESS';

const baseURL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4QxcBzIB2XstvQp9Xqxd/books';
const initialState = {
  books: [],
  loading: false,
  error: '',
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const fetchBooks = () => (dispatch) => {
  dispatch({ type: LOADING });
  return fetch(baseURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(
      (data) => dispatch({ type: FETCH_BOOKS, data }),
      (error) => dispatch({ type: ERROR, error }),
    );
};

export const postBook = (book) => (dispatch) => {
  dispatch({ type: LOADING });
  return fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then((response) => response.json())
    .then(
      (data) => dispatch({ type: POST_BOOK, book, data }),
      (error) => dispatch({ type: ERROR, error }),
    );
};

export const deleteBook = (item_id) => (dispatch) => {
  dispatch({ type: LOADING });
  return fetch(`${baseURL}/${item_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id }),
  })
    .then((response) => response.data())
    .then(
      (data) => dispatch({ type: REMOVE_BOOK, item_id, data }),
      (error) => dispatch({ type: ERROR, error }),
    );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS: {
      const list = [];
      Object.keys(action.data).forEach((id) => {
        list.push({ item_id: id, ...action.data[id][0] });
      });
      return {
        ...state,
        books: [...state.books, ...list],
        loading: false,
      };
    }
    case POST_BOOK: {
      return {
        ...state,
        books: [...state.books, action.book],
        loading: false,
      };
    }
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== action.item_id),
      };
    case LOADING: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case ERROR: {
      return {
        ...state,
        loading: false,
        loading_error: action.error,
      };
    }
    default:
      return state;
  }
};

export default reducer;
