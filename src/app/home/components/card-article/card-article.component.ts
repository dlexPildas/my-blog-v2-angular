import { Article } from './../../models/article.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {
  @Input() article!: Article;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  wasClicked(): void {
    this.clicked.emit(true);
  }

}
