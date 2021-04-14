import axios from 'axios';

const SERVER_URL = 'http://localhost:3000';

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
  }).then(response => dispatch({
    type: 'CREATE_USER_BOOK',
    payload: response,
  })).catch(error => dispatch({ type: 'CREATE_USER_BOOK_ERROR', payload: error }));
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
    .then(response => dispatch({
      type: 'SIGN_IN',
      payload: response,
    }))
    .catch(error => dispatch({ type: 'SIGN_IN_ERROR', payload: error }));
};

export const signOut = () => ({
  type: 'SIGN_OUT',
});

export const deleteUserBook = (authToken, bookId) => dispatch => {
  axios({
    method: 'delete',
    url: `${SERVER_URL}/books/${bookId}`,
    headers: {
      Accept: 'application/json',
      Authorization: authToken,
    },
  }).then(response => dispatch({
    type: 'DELETE_USER_BOOK',
    payload: response,
  })).catch(error => dispatch({ type: 'DELETE_USER_BOOK_ERROR', payload: error }));
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
