import {createReducer, on} from '@ngrx/store';
import {openMenu, closeMenu} from '../actions/menuToggle.actions';

export interface MenuState {
  toggle: boolean;
}

export const MenuInitialState: MenuState = {
  toggle: false,
};

const _menuToggleReducer = createReducer(MenuInitialState,
  on(openMenu, state => ({...state, toggle: true})),
  on(closeMenu, state => ({...state, toggle: false})),
);

export function menuToggleReducer(state, action) {
  return _menuToggleReducer(state, action);
}
