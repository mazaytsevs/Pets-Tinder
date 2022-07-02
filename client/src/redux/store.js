import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';
import { getInitState } from './reducers/user';

const store = createStore(rootReducer, getInitState(), composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()));
});

export default store;
