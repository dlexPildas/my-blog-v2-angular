import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { HomeRoutingModule } from './home-routing.module';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CardArticleComponent } from './components/card-article/card-article.component';
import { CardAuthorComponent } from './components/card-author/card-author.component';
import { ArticleNewComponent } from './pages/article-new/article-new.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleDetailComponent,
    CardArticleComponent,
    CardAuthorComponent,
    ArticleNewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    AngularEditorModule
  ]
})
export class HomeModule { }
