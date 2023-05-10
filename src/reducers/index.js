import {combineReducers} from 'redux';

import User from './user';
import Cart from './product';

export default combineReducers({
  User,
  Cart,
});
