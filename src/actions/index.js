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

// export const signIn = (email, password) => ({
//   type: 'SIGN_IN',
//   payload: { email, password },
// });

const signInHeaders = {
  mode: 'cors',
  Accept: 'application/json',
};

export const signIn = (email, password) => dispatch => {
  axios.post(`${SERVER_URL}/users/sign_in`, { email, password }, signInHeaders).then(response => dispatch({
    type: 'SIGN_IN',
    payload: response,
  })).catch(error => dispatch({ type: 'SIGN_IN_ERROR', payload: error }));
};

// export const signIn = (email, password) => async dispatch => {
//   const apiUrl = `${SERVER_URL}/users/sign_in`;
//   let response;
//   try {
//     response = await fetch(apiUrl, {
//       method: 'POST',
//       mode: 'no-cors',
//       redirect: 'follow',
//       headers: {
//         'Content-Type': 'application/json',
//         Connection: 'keep-alive',
//       },
//       body: JSON.stringify({ email, password }),
//     });
//     dispatch({
//       type: 'SIGN_IN',
//       payload: response,
//     });
//   } catch (e) {
//     console.log(e, 'desde action');
//     dispatch({
//       type: 'SIGN_IN_ERROR',
//     });
//   }
// };

export const signOut = () => ({
  type: 'SIGN_OUT',
});
