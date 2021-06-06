
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { addEffectMenu, removeEffectMenu } from 'src/app/store/app.actions';
import { MenuState } from 'src/app/store/app.reducer';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  count$!: Observable<number>;

  constructor(
    private route: Router,
    private store: Store<MenuState>
  ) { }

  ngOnInit(): void {
  }

  navigateToDetailArticle(): void {
    this.store.dispatch(removeEffectMenu());
    this.route.navigate(['/detail/1']);
  }

}
