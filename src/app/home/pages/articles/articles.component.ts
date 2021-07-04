import { removeLoading } from './../../../store/app.actions';
import { Article } from './../../models/article.model';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { addEffectMenu, addLoading, removeEffectMenu } from 'src/app/store/app.actions';
import { MenuState } from 'src/app/store/app.reducer';
import { ArticleService } from '@home/services/article.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  count$!: Observable<number>;
  articles$!: Observable<Article[]>;

  constructor(
    private route: Router,
    private store: Store<MenuState>,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.store.dispatch(addLoading())
    this.articles$ = this.articleService.getArticles()
      .pipe(
        finalize(() => this.store.dispatch(removeLoading()))
      );
  }

  navigateToDetailArticle(articleId: string): void {
    this.store.dispatch(removeEffectMenu());
    this.route.navigate([`/article/detail/${articleId}`]);
  }

}
