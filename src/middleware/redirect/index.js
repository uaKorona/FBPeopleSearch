import { browserHistory } from 'react-router';

const redirect = store => next => (action) => { // eslint-disable-line no-unused-vars
  if (action.type === 'ROUTING') {
    const method = action.payload.method || 'push';
    browserHistory[method](action.payload.nextUrl);
  }
  return next(action);
};

export default redirect;
