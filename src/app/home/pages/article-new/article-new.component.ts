import { AlertService } from './../../../shared/services/alert.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { v4 as uuidv4 } from 'uuid';

import { ArticleService } from './../../services/article.service';
import { Article } from './../../models/article.model';
import { MenuState } from 'src/app/store/app.reducer';
import { removeEffectMenu } from 'src/app/store/app.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit, OnDestroy {
  articleForm!: FormGroup;
  subscription!: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<MenuState>,
    private articleService: ArticleService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.removeEffectMenu();
    this.initializeForm();
  }

  initializeForm(): void {
    this.articleForm = this.formBuilder.group({
      theme: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      urlImg: [''],
      content: ['', Validators.required],
    })
  }

  removeEffectMenu(): void {
    this.store.dispatch(removeEffectMenu());
  }

  createArticle(): void {
    const article = {
      ...this.articleForm.value,
      createDate: new Date().toString(),
      id: this.generateId()
    } as Article;

    this.subscription = this.articleService.createArticle(article)
      .subscribe(
        () => this.router.navigateByUrl(''),
        () => this.alertService.alertError('Erro ao criar o artigo')
      );
  }

  generateId(): string {
    return uuidv4();
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
