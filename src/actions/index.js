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

export const signIn = (email, password) => async dispatch => {
  const apiUrl = `${SERVER_URL}/users/sign_up`;
  let response;
  try {
    response = await fetch(apiUrl, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    dispatch({
      type: 'SIGN_IN',
      payload: response,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: 'SIGN_IN_ERROR',
    });
  }
};

export const signOut = () => ({
  type: 'SIGN_OUT',
});
