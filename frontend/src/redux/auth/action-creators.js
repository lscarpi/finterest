import { actions } from './actions';
import { loginUser } from '../../services/auth-service'
import { config, appConfig } from '../../config/apiConfig'

const localStorageKey = `${config.URL}-${appConfig.localStorageItem}`

const saveData = (data, key = localStorageKey) =>
  localStorage.setItem(key, JSON.stringify(data));

export const startLogin = (
  email,
  password
) => async (dispatch) => {
  dispatch(actions.loginStart());

  return loginUser(email, password)
    .then(response => {
      dispatch(actions.saveLoginData(response))
      dispatch(actions.loginSuccess(response))
      saveData(response, localStorageKey)
      
      return response;
    })
    .catch((error) => {
      dispatch(actions.loginError(error));

      throw error
    });
}