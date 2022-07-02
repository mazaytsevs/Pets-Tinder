import { combineReducers } from 'redux';
import dogReducer from './dog';
import userReducer from './user';

const rootReducer = combineReducers({
  user: userReducer,
  dog: dogReducer,
});

export default rootReducer;
