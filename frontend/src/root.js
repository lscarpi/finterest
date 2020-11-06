import React from 'react'
import { Routes } from './routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const Root = () => (
  <Provider store={store}>
    <Routes></Routes>
  </Provider>
);

export default Root;
