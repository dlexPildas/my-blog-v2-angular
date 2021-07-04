import { ArticleNewComponent } from './pages/article-new/article-new.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { AuthGuard } from '@shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'article/detail/:articleId', component: ArticleDetailComponent },
  { path: 'article/new', component: ArticleNewComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
