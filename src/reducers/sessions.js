const sessionReducer = (
  state = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2LCJleHAiOjE2MTg1ODYxNDgsImlhdCI6MTYxODQ5OTc0OH0.mFdQCdTjIOCXZRihn6Vct9wm0TUgsCuY1bzyQCCNA_A',
  action,
) => {
  switch (action.type) {
    case 'SIGN_IN':
      console.log(action.payload, 'from session reducer');
      return action.payload;
    case 'SIGN_IN_ERROR':
      console.log('error desde el reducer');
      break;
    default:
      return state;
  }
  return state;
};

export default sessionReducer;
