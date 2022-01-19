const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS_LOADING = 'bookStore/books/GET_BOOKS_LOADING';
const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'bookStore/books/GET_BOOKS_FAILURE';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4QxcBzIB2XstvQp9Xqxd/books';
const initialState = {
  books: [],
  loading: false,
  error: '',
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const booksLoading = () => ({
  type: GET_BOOKS_LOADING,
});

export const booksSuccess = (data) => ({
  type: GET_BOOKS_SUCCESS,
  data,
});

export const booksFailure = (error) => ({
  type: GET_BOOKS_FAILURE,
  error,
});

export const fetchBooks = () => (dispatch) => {
  dispatch(booksLoading());
  return (
    fetch(baseURL)
      .then((response) => response.text())
      // .then((response) => console.log(response))
      .then(
        (data) => dispatch(booksSuccess(data)),
        (error) => dispatch(booksFailure(error)),
      )
  );
};

// export const

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
      };
    case GET_BOOKS_LOADING: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case GET_BOOKS_SUCCESS: {
      return {
        ...state,
        books: action.data,
        loading: false,
      };
    }
    case GET_BOOKS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default reducer;
