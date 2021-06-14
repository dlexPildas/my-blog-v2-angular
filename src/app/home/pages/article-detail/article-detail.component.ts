import { removeEffectMenu } from 'src/app/store/app.actions';
import { Store } from '@ngrx/store';
import { MenuState } from 'src/app/store/app.reducer';
import { Article } from '@home/models/article.model';
import { Observable } from 'rxjs';
import { ArticleService } from '@home/services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article$!: Observable<Article>;

  constructor(
    private store: Store<MenuState>,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(removeEffectMenu());
    this.getArticle('2ea5c794-66a5-40d0-ad1c-569db8b80885');
  }

  getArticle(articleId: string): void {
    this.article$ = this.articleService.getArticleById(articleId);
  }

}
