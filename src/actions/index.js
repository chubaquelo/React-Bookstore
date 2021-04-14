import axios from 'axios';

const SERVER_URL = 'http://localhost:3000';

export const addBook = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

export const removeBook = bookId => ({
  type: 'REMOVE_BOOK',
  payload: bookId,
});

export const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  payload: category,
});

const signInHeaders = {
  mode: 'cors',
  Accept: 'application/json',
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
