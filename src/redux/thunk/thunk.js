const GET_BOOKS_LOADING = 'bookStore/books/GET_BOOKS_LOADING';
const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'bookStore/books/GET_BOOKS_FAILURE';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4QxcBzIB2XstvQp9Xqxd/books';

const initialState = {
  books: [],
  loading: false,
  error: '',
};

export const fetchBooks = () => (dispatch) => {
  dispatch({ type: GET_BOOKS_LOADING });
  return (
    fetch(baseURL)
      .then((response) => response.text())
      // .then((response) => console.log(response))
      .then(
        (data) => dispatch({ type: GET_BOOKS_SUCCESS, data }),
        (error) => dispatch({ type: GET_BOOKS_FAILURE, error }),
      )
  );
};

// .then(response => response.json())
// .then(response => console.log(response))

export default function thunkReducer(state = initialState, action) {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
}
