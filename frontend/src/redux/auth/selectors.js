import { config, appConfig } from '../../config/apiConfig'

export const localStorageKey = `${config.URL}-${appConfig.localStorageItem}`;

export const getData = (key) => JSON.parse(localStorage.getItem(key));

export const isLoggedIn = state => (
  state.auth.get('isLoggedIn') && !!getToken()
)
export const isLoginInProgress = (state) => (
  state.auth.get('loginSent')
)
export const getToken = (key = localStorageKey) => (
  getData(key).token
)
