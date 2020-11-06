import { fromJS } from 'immutable';
import { actionStrings as actions } from './actions';

const initState = fromJS({
  loginSent: false,
  loggedIn: false,
  token: '',
  isLoading: false,
  error: null,
  rememberMe: false
});

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return state;
    case actions.LOGIN_START:
      return state.set('loginSent', true);
    case actions.LOGIN_ERROR:
      return state.set('error', {
        error: action.payload.message,
        time: new Date()
      })
        .set('loginSent', false);
    case actions.LOGIN_SUCCESS:
      return state.set('isLoggedIn', true)
        .set('loginSent', false);
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
};
