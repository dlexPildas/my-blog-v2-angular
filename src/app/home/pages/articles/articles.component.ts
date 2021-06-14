import { Article } from './../../models/article.model';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { addEffectMenu, removeEffectMenu } from 'src/app/store/app.actions';
import { MenuState } from 'src/app/store/app.reducer';
import { ArticleService } from '@home/services/article.service';

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
    this.articles$ = this.articleService.getArticles();
  }

  navigateToDetailArticle(articleId: string): void {
    this.store.dispatch(removeEffectMenu());
    this.route.navigate([`/article/detail/${articleId}`]);
  }

}
