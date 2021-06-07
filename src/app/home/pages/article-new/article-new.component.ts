import { ArticleService } from './../../services/article.service';
import { Article } from './../../models/article.model';
import { MenuState } from 'src/app/store/app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeEffectMenu } from 'src/app/store/app.actions';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {
  htmlContent: string = '';

  articleForm!: FormGroup;
  // editorConfig: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   height: 'auto',
  //   minHeight: '0',
  //   maxHeight: 'auto',
  //   width: 'auto',
  //   minWidth: '0',
  //   translate: 'yes',
  //   enableToolbar: true,
  //   showToolbar: true,
  //   placeholder: 'Enter text here...',
  //   defaultParagraphSeparator: '',
  //   defaultFontName: '',
  //   defaultFontSize: '',
  //   fonts: [
  //     { class: 'arial', name: 'Arial' },
  //     { class: 'times-new-roman', name: 'Times New Roman' },
  //     { class: 'calibri', name: 'Calibri' },
  //     { class: 'comic-sans-ms', name: 'Comic Sans MS' }
  //   ],
  //   customClasses: [
  //     {
  //       name: 'quote',
  //       class: 'quote',
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText'
  //     },
  //     {
  //       name: 'titleText',
  //       class: 'titleText',
  //       tag: 'h1',
  //     },
  //   ],
  //   uploadUrl: 'v1/image',
  //   uploadWithCredentials: false,
  //   sanitize: true,
  //   toolbarPosition: 'top',
  //   toolbarHiddenButtons: [
  //     ['bold', 'italic'],
  //     ['fontSize']
  //   ]
  // };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<MenuState>,
    private articleService: ArticleService
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
    const article = this.articleForm.value as Article;
    this.articleService.createArticle(article)
      .then(response => this.router.navigateByUrl(''))
      .catch(error => console.log(error))
  }

}
