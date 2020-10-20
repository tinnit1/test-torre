import {createReducer, on} from '@ngrx/store';
import {loadUser, loadUserError, loadUserSuccess} from '../actions';
import {RootObject} from '../../models/rootObject';

export interface Userstate {
  user: RootObject;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const userInitialState: Userstate = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

const _userReducer = createReducer(userInitialState,
  on(loadUser, (state) => ({
    ...state,
    loading: true
  })),
  on(loadUserSuccess, (state, {user}) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...user}
  })),
  on(loadUserError, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
      status: payload.status
    }
  })),
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
