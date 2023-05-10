import {
  FETCH_USER,
  LOGIN_SUCCESS,
  LOG_OUT,
  UPDATE_USER,
} from '../actions/action-types';
import {userData} from '../../mocks/user';

const initialState = {
  user: {...userData}, // using mockdata since there no actual api
  loading: true,
  isAuthenticated: false,
  token: '',
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
        token: action.payload.token,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case UPDATE_USER:
      console.log('LOGIN_SUCCESS', action.payload);
      return {
        ...state,
        user: action.payload,
      };

    case LOG_OUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default UserReducer;
