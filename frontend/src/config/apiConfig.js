export const config = {
  URL: 'http://localhost:8080' || '',

  API_VERSION: process.env.REACT_APP_API_VERSION || 'v1',

  API: {
    LOGIN: 'auth/login'
  },

  CONTENT_TYPES: {
    APPLICATION_JSON: 'application/json',
    MULTIPART: 'multipart/form-data'
  },

  REQ_TYPES: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
  }
}

export const REQUEST_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  HEAD: 'HEAD'
}

export const appConfig = {
  localStorageItem: 'finterest'
};
  