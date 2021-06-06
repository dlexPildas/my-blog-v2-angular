import { MenuState } from 'src/app/store/app.reducer';
import { createSelector } from "@ngrx/store";


// export const selectChangeEffect = createSelector(
//   (state: AppState) => state.effectMenuActive,
//   (state: boolean) => state
// );
// export const getEffectiveMenuState = (state: AppState) => state.effectMenuActive;


export const MenuStateSelect = (state: any) => state.menustate;
export const getEffectiveMenuState = createSelector(MenuStateSelect, (state: MenuState) => state.effectMenuActive);

