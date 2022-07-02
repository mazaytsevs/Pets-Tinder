import { combineReducers } from 'redux';
import dogReducer from './dog';
import petsReducer from './pets';
import userReducer from './user';

const rootReducer = combineReducers({
  user: userReducer,
  dog: dogReducer,
  pets: petsReducer,
});

export default rootReducer;
