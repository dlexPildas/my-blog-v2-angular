import { ArticleNewComponent } from './pages/article-new/article-new.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { ArticlesComponent } from './pages/articles/articles.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'detail/:articleId', component: ArticleDetailComponent },
  { path: 'new', component: ArticleNewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
