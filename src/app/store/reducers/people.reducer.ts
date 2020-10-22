import {createReducer, on} from '@ngrx/store';
import {loadPeople, loadPeopleError, loadPeopleSuccess} from '../actions/people.actions';
import {Member} from '../../models/member';

export interface Peoplestate {
  people: Member[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const peopleInitialState: Peoplestate = {
  people: [],
  loaded: false,
  loading: false,
  error: null
};

const _peopleReducer = createReducer(peopleInitialState,
  on(loadPeople, (state) => ({
    ...state,
    loading: true
  })),
  on(loadPeopleSuccess, (state, {people}) => ({
    ...state,
    loading: false,
    loaded: true,
    people: [...people]
  })),
  on(loadPeopleError, (state, {payload}) => ({
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

export function peopleReducer(state, action) {
  return _peopleReducer(state, action);
}
