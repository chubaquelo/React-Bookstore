import axios from 'axios';

const SERVER_URL = 'https://esteban-sergio-bookstore-app.herokuapp.com';

export const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  payload: category,
});

const signInHeaders = {
  mode: 'cors',
  Accept: 'application/json',
};

export const addUserBook = (authToken, book = {}) => dispatch => {
  axios({
    method: 'post',
    url: `${SERVER_URL}/books`,
    data: {
      title: book.title,
      author: book.author,
      category_id: book.category,
      progress: 0,
    },
    headers: {
      Accept: 'application/json',
      Authorization: authToken,
    },
  }).then(response => {
    if (response) {
      const categories = [
        'All',
        'Action',
        'Biography',
        'History',
        'Horror',
        'Kids',
        'Learning',
        'Sci-Fi',
      ];
      const modifiedBook = {
        ...book,
        id: response.data.id,
        progress: '0',
        category: {
          id: book.category,
          name: categories[book.category],
        },
      };
      window.console.log(modifiedBook);
      dispatch({
        type: 'CREATE_USER_BOOK',
        payload: modifiedBook,
      });
    }
  }).catch(error => dispatch({ type: 'CREATE_USER_BOOK_ERROR', payload: error }));
};

export const signIn = (email, password) => dispatch => {
  axios({
    method: 'post',
    url: `${SERVER_URL}/users/sign_in`,
    data: {
      email,
      password,
    },
    headers: signInHeaders,
  })
    .then(response => {
      if (typeof response.headers['access-token'] === 'string') {
        window.localStorage.setItem(
          'sessionID',
          response.headers['access-token'],
        );
        dispatch({
          type: 'SIGN_IN',
          payload: response.headers['access-token'],
        });
      }
    })
    .catch(error => dispatch({ type: 'SIGN_IN_ERROR', payload: error }));
};

export const signUp = (email, password) => dispatch => {
  axios({
    method: 'post',
    url: `${SERVER_URL}/users/sign_up`,
    data: {
      email,
      password,
    },
    headers: signInHeaders,
  })
    .then(response => {
      if (typeof response.headers['access-token'] === 'string') {
        window.localStorage.setItem(
          'sessionID',
          response.headers['access-token'],
        );
        dispatch({
          type: 'SIGN_UP',
          payload: response.headers['access-token'],
        });
      }
    })
    .catch(error => dispatch({ type: 'SIGN_UP_ERROR', payload: error }));
};

export const signOut = authToken => dispatch => {
  axios({
    method: 'delete',
    url: `${SERVER_URL}/users/sign_out`,
    headers: {
      Accept: 'application/json',
      Authorization: authToken,
    },
  }).then(response => {
    if (response) {
      window.localStorage.clear();
      dispatch({
        type: 'SIGN_OUT',
      });
    }
  }).catch(error => dispatch({ type: 'SIGN_OUT_ERROR', payload: error }));
};

export const deleteUserBook = (authToken, bookId) => dispatch => {
  axios({
    method: 'delete',
    url: `${SERVER_URL}/books/${bookId}`,
    headers: {
      Accept: 'application/json',
      Authorization: authToken,
    },
  }).then(response => {
    if (response) {
      dispatch({
        type: 'DELETE_USER_BOOK',
        payload: bookId,
      });
    }
  }).catch(error => dispatch({ type: 'DELETE_USER_BOOK_ERROR', payload: error }));
};

export const getUserBooks = authToken => dispatch => {
  axios({
    method: 'get',
    url: `${SERVER_URL}/books`,
    headers: {
      Accept: 'application/json',
      Authorization: authToken,
    },
  })
    .then(response => dispatch({
      type: 'GET_USER_BOOKS',
      payload: response.data,
    }))
    .catch(error => dispatch({ type: 'GET_USER_BOOKS_ERROR', payload: error }));
};

export const localStorageSignIn = token => {
  const sessionData = [token, true];
  return ({
    type: 'LOCAL_STORAGE_SIGN_IN',
    payload: sessionData,
  });
};

export const updateBookProgress = (authToken, bookID, progress) => dispatch => {
  axios({
    method: 'put',
    url: `${SERVER_URL}/books/${bookID}`,
    headers: {
      Accept: 'application/json',
      Authorization: authToken,
      mode: 'cors',
      type: 'UPDATE_BOOK_PROGRESS',
      progress,
    },
  })
    .then(response => {
      if (response) {
        dispatch({
          type: 'UPDATE_BOOK_PROGRESS',
          payload: bookID,
        });
      }
    })
    .catch(error => dispatch({ type: 'UPDATE_BOOK_ERROR', payload: error }));
};
