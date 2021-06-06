
import { createReducer, on } from '@ngrx/store';

import { addEffectMenu, removeEffectMenu } from './app.actions';

export interface MenuState {
  effectMenuActive: boolean;
}

export const initialState: MenuState = {
  effectMenuActive: true
};

export const appReducers = createReducer(
  initialState,
  on(addEffectMenu, (state) => {
    return {
      effectMenuActive: true
    }
  }),
  on(removeEffectMenu, (state) => {
    return {
      effectMenuActive: false
    }
  })
);
