import { UserModel } from './../shared/models/user.model';

import { createReducer, on } from '@ngrx/store';

import { addEffectMenu, addLoading, removeEffectMenu, removeLoading, login, logout } from './app.actions';

export interface MenuState {
  effectMenuActive: boolean;
  loading: boolean;
  hasUser: boolean;
}

export const initialState: MenuState = {
  effectMenuActive: true,
  loading: false,
  hasUser: false
};

export const appReducers = createReducer(
  initialState,
  on(addEffectMenu, (state) => {
    return {
      effectMenuActive: true,
      loading: state.loading,
      hasUser: state.hasUser
    }
  }),
  on(removeEffectMenu, (state) => {
    return {
      effectMenuActive: false,
      loading: state.loading,
      hasUser: state.hasUser
    }
  }),
  on(addLoading, (state) => {
    return {
      effectMenuActive: state.effectMenuActive,
      loading: true,
      hasUser: state.hasUser
    }
  }),
  on(removeLoading, (state) => {
    return {
      effectMenuActive: state.effectMenuActive,
      loading: false,
      hasUser: state.hasUser
    }
  }),
  on(login, (state) => {
    return {
      effectMenuActive: state.effectMenuActive,
      loading: state.loading,
      hasUser: true
    }
  }),
  on(logout, (state) => {
    return {
      effectMenuActive: state.effectMenuActive,
      loading: state.loading,
      hasUser: false
    }
  })
);
