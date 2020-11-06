import axios from 'axios'
import { config } from '../config/apiConfig'

const loginRoute = `${config.URL}/${config.API.LOGIN}`;

export const loginUser = (email, password) => {
  const loginData = { email, password }

  return axios.post(
    loginRoute,
    loginData
  )
};