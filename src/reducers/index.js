import { combineReducers } from 'redux';
import usersReducer from './users';
import listsReducer from './todos';

const rootReducer = combineReducers({
  users:usersReducer,
  lists:listsReducer
});

export default rootReducer;
