import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { MenuState } from 'src/app/store/app.reducer';
import { Observable } from 'rxjs';
import { getLoadingMenuState } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  loading$!: Observable<boolean>;

  constructor(
    private store: Store<MenuState>,
  ) { }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(getLoadingMenuState));
  }

}
