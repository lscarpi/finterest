import { config, appConfig } from '../../config/apiConfig'

export const localStorageKey = `${config.URL}-${appConfig.localStorageItem}`;

export const isLoggedIn = state => (
  !!getToken()
)
export const isLoginInProgress = (state) => (
  state.auth.get('loginSent')
)
export const getToken = (key = localStorageKey) => {
  return JSON.parse(localStorage.getItem(key)).data.token;
}
