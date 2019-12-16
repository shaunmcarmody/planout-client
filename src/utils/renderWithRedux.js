import React from 'react';
import { render } from '@testing-library/react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers';

export default function(component, store = createStore(rootReducer, applyMiddleware(thunk))) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  }
}