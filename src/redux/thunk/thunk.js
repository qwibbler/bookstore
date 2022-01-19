const GET_BOOKS_LOADING = 'bookStore/books/GET_BOOKS_LOADING';
const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'bookStore/books/GET_BOOKS_FAILURE';

const fetchBooks = () => (dispatch) => {
  dispatch({ type: GET_BOOKS_LOADING });
  return fetch(baseURL).then(
    (bookList) => dispatch({ type: GET_BOOKS_SUCCESS, user }),
    (err) => dispatch({ type: GET_BOOKS_FAILURE, err }),
  );
};

const initialState = {
  books: [],
  loading: false,
  error: '',
};

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
    case LOAD_USERS_ERROR: {
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
