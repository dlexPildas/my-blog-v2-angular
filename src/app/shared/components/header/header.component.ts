import { AuthService } from '@user/services/auth.service';
import { MenuState } from 'src/app/store/app.reducer';
import { select, Store } from '@ngrx/store';
import { Menu } from '@shared/models/menu.enum';
import { Component, OnInit } from '@angular/core';
import { getEffectiveMenuState, hasUser } from 'src/app/store/app.selectors';
import { take, tap } from 'rxjs/operators';
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
  hasUser$!: Observable<boolean>;

  constructor(
    private store: Store<MenuState>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.effectMenuIsActive$ = this.store.pipe(select(getEffectiveMenuState));
    this.hasUser$ = this.store.pipe(select(hasUser));
  }

  updateOptionSelected(optionSelected: Menu): void {
    this.addEffectToMenu();
  }

  addEffectToMenu(): void {
    this.store.dispatch(addEffectMenu());
  }

  logout(): void {
    this.authService.SignOut()
      .pipe(
        take(1)
      )
      .subscribe();
  }

}
