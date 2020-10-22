import {createAction, props} from '@ngrx/store';
import {Member} from '../../models/member';

export const loadPeople = createAction('[People Component] loadPeople');

export const loadPeopleSuccess = createAction(
  '[People Component] loadPeople success',
  props<{people: Member[]}>());

export const loadPeopleError = createAction(
  '[People Component] loadPeople error',
  props<{payload: any}>());
