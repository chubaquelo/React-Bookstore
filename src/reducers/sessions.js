const sessionReducer = (
  state = ['', false],
  action,
) => {
  switch (action.type) {
    case 'SIGN_IN':
      return [action.payload, true];
    case 'SIGN_IN_ERROR':
      throw action.payload;
    default:
      return state;
  }
};

export default sessionReducer;
