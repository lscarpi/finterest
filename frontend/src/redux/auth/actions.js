export const actionStrings = {
  LOGIN: 'LOGIN',
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',

  LOGOUT: 'LOGOUT',

  PASSWORD_CHANGE_START: 'PASSWORD_CHANGE_START',
  PASSWORD_CHANGE_TOKEN_RECEIVED: 'PASSWORD_CHANGE_TOKEN_RECEIVED',
  PASSWORD_CHANGE_ERROR: 'PASSWORD_CHANGE_ERROR',

  PASSWORD_RESET_START: 'PASSWORD_RESET_START',
  PASSWORD_RESET_SUCCESS: 'PASSWORD_RESET_SUCCESS',
  PASSWORD_RESET_ERROR: 'PASSWORD_RESET_ERROR',

  REMEMBER_ME: 'REMEMBER_ME',
  SAVE_LOGIN_DATA: 'SAVE_LOGIN_DATA'
};

export const actions = {
  login: (email, password) => ({
    type: actionStrings.LOGIN,
    payload: { email, password }
  }),
  loginStart: () => ({
    type: actionStrings.LOGIN_START
  }),
  loginSuccess: data => ({
    type: actionStrings.LOGIN_SUCCESS,
    payload: data
  }),
  loginError: error => ({
    type: actionStrings.LOGIN_ERROR,
    payload: error
  }),
  logout: () => ({
    type: actionStrings.LOGOUT
  }),
  passwordChangeStart: email => ({
    type: actionStrings.PASSWORD_CHANGE_START,
    payload: { email }
  }),
  passwordChangeToken: data => ({
    type: actionStrings.PASSWORD_CHANGE_TOKEN_RECEIVED,
    payload: data
  }),
  passwordChangeError: error => ({
    type: actionStrings.PASSWORD_CHANGE_ERROR,
    payload: error
  }),
  passwordResetStart: (token, email, password) => ({
    type: actionStrings.PASSWORD_RESET_START,
    payload: { token, email, password }
  }),
  passwordResetSuccess: data => ({
    type: actionStrings.PASSWORD_RESET_SUCCESS,
    payload: data
  }),
  passwordResetError: error => ({
    type: actionStrings.PASSWORD_RESET_ERROR,
    payload: error
  }),
  rememberMe: (rememberMe) => ({
    type: actionStrings.REMEMBER_ME,
    payload: rememberMe
  }),
  saveLoginData: (data) => ({
    type: actionStrings.SAVE_LOGIN_DATA,
    payload: data
  })
};
  