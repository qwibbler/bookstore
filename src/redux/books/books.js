const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const LOADING = 'bookStore/books/LOADING';
const ERROR = 'bookStore/books/ERROR';

// const GET_BOOKS_LOADING = 'bookStore/books/GET_BOOKS_LOADING';
const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOKS_SUCCESS';
// const GET_BOOKS_FAILURE = 'bookStore/books/GET_BOOKS_FAILURE';

// const POST_BOOKS_LOADING = 'bookStore/books/POST_BOOKS_LOADING';
const POST_BOOKS_SUCCESS = 'bookStore/books/POST_BOOKS_SUCCESS';
// const POST_BOOKS_FAILURE = 'bookStore/books/POST_BOOKS_FAILURE';

// const DELETE_BOOKS_LOADING = 'bookStore/books/DELETE_BOOKS_LOADING';
// const DELETE_BOOKS_SUCCESS = 'bookStore/books/DELETE_BOOKS_SUCCESS';
// const DELETE_BOOKS_FAILURE = 'bookStore/books/DELETE_BOOKS_FAILURE';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4QxcBzIB2XstvQp9Xqxd/books';
const initialState = {
  books: [],
  loading: false,
  loading_error: '',
  posting: false,
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
      (data) => dispatch({ type: GET_BOOKS_SUCCESS, data }),
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
      (data) => dispatch({ type: POST_BOOKS_SUCCESS, data }),
      (error) => dispatch({ type: ERROR, error }),
    );
};

// export const deleteBook = (bookId) => (dispatch) => {
//   dispatch({ type: LOADING });
//   return (
//     post(`${baseURL}/${bookId}`)
//       .then((response) => response.text())
//       .then(
//         (data) => dispatch({ type: DELETE_BOOKS_SUCCESS, data }),
//         (error) => dispatch({ type: ERROR, error }),
//       )
//   );
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
      };
    case LOADING: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case GET_BOOKS_SUCCESS: {
      const list = [];
      Object.keys(action.data).forEach((id) => {
        list.push({ item_id: id, ...action.data[id][0] });
      });
      console.log('THIS', list[0]);
      return {
        ...state,
        books: list,
        loading: false,
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
