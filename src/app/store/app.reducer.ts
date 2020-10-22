import {ActionReducerMap} from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  ui: reducers.State;
  user: reducers.Userstate;
  menuToggle: reducers.MenuState;
  people: reducers.Peoplestate;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: reducers.loadingReducer,
  user: reducers.userReducer,
  menuToggle: reducers.menuToggleReducer,
  people: reducers.peopleReducer
};
