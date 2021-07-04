import { addLoading, removeEffectMenu, removeLoading } from 'src/app/store/app.actions';
import { Store } from '@ngrx/store';
import { MenuState } from 'src/app/store/app.reducer';
import { Article } from '@home/models/article.model';
import { Observable } from 'rxjs';
import { ArticleService } from '@home/services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  articleId!: string;
  article$!: Observable<Article>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<MenuState>,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(removeEffectMenu());
    this.getArticle(this.getArticleIdFromUrl());
  }

  getArticleIdFromUrl(): string {
    return this.activatedRoute.snapshot.params.articleId;
  }


  getArticle(articleId: string): void {
    this.store.dispatch(addLoading())
    this.article$ = this.articleService.getArticleById(articleId)
      .pipe(
        finalize(() => this.store.dispatch(removeLoading()))
      );;
  }

}
