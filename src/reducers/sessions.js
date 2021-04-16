const sessionReducer = (
  state = ['', false],
  action,
) => {
  switch (action.type) {
    case 'SIGN_IN':
      return [action.payload, true];
    case 'SIGN_IN_ERROR':
      throw action.payload;
    case 'SIGN_UP':
      return [action.payload, true];
    case 'SIGN_UP_ERROR':
      throw action.payload;
    case 'SIGN_OUT':
      return ['', false];
    case 'SIGN_OUT_ERROR':
      throw action.payload;
    case 'LOCAL_STORAGE_SIGN_IN':
      return action.payload;
    default:
      return state;
  }
};

export default sessionReducer;
