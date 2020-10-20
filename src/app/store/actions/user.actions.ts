import {createAction, props} from '@ngrx/store';
import {RootObject} from '../../models/rootObject';

export const loadUser = createAction('[User Component] loadUser');

export const loadUserSuccess = createAction(
  '[User Component] loadUser success',
  props<{user: RootObject}>());

export const loadUserError = createAction(
  '[User Component] loadUser error',
  props<{payload: any}>());
