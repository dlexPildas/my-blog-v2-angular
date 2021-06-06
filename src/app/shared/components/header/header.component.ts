import { MenuState } from 'src/app/store/app.reducer';
import { select, Store } from '@ngrx/store';
import { Menu } from '@shared/models/menu.enum';
import { Component, OnInit } from '@angular/core';
import { getEffectiveMenuState } from 'src/app/store/app.selectors';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { addEffectMenu } from 'src/app/store/app.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  optionMenu = Menu;
  optionSelected: Menu = Menu.home;

  effectMenuIsActive$!: Observable<boolean>;

  constructor(
    private store: Store<MenuState>
  ) { }

  ngOnInit(): void {
    this.effectMenuIsActive$ = this.store.pipe(select(getEffectiveMenuState));
  }

  updateOptionSelected(optionSelected: Menu): void {
    this.addEffectToMenu();
  }

  addEffectToMenu(): void {
    this.store.dispatch(addEffectMenu());
  }

}
