import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  htmlContent: string = '';

  constructor(
  ) { }

  ngOnInit(): void {
    // console.log("opaaa...")

    // this.store.subscribe(state => {
    //   console.log(state);
    // })
  }

}
