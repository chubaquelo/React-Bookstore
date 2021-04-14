const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      console.log(action.payload.headers, 'from reducer');
      break;
    case 'SIGN_IN_ERROR':
      console.log('error desde el reducer');
      break;
    default:
      return state;
  }
  return state;
};

export default sessionReducer;
