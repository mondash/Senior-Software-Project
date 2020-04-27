import { combineReducers } from 'redux';
import auth from './auth';
import runtime from './runtime';
import navigation from './navigation';
import posts from './posts';

import userNew from '../actions/userNew';

export default combineReducers({
  auth,
  runtime,
  navigation,
  posts,
  session: userNew
});
