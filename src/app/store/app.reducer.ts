import {ActionReducerMap} from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  ui: reducers.State;
  user: reducers.Userstate;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: reducers.loadingReducer,
  user: reducers.userReducer
};
