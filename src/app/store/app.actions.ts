import { UserModel } from './../shared/models/user.model';
import { createAction } from '@ngrx/store';

// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');

export const removeEffectMenu = createAction('[Home Page] Remove effect');
export const addEffectMenu = createAction('[Home Page] Add effect');
export const addLoading = createAction('[Home Page] Add loading');
export const removeLoading = createAction('[Home Page] Remove loading');
export const login = createAction('[Header] Login');
export const logout = createAction('[Header] Logout');
