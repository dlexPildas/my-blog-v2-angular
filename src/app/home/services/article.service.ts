import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Article } from '@home/models/article.model';
import { Observable, from } from 'rxjs';
// import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private firestore: AngularFirestore,
  ) { }


  getArticles(): Observable<Article[]> {
    return this.firestore.collection('article')
      .get()
      .pipe(
        map((result) => this.convertCollectionToArrayArticles(result as QuerySnapshot<unknown>))
      );
  }

  getArticleById(articleId: string): Observable<Article> {
    return this.firestore
      .collection('article', ref => ref.where('id', "==", articleId))
      .get()
      .pipe(
        map((result) => this.convertCollectionToArrayArticles(result as QuerySnapshot<unknown>)[0])
      );

  }

  createArticle(article: Article) {
    return from(
      this.firestore.collection('article')
        .add(article)
    );
  }

  private convertCollectionToArrayArticles(result: QuerySnapshot<unknown>): Article[] {
    const array: Article[] = [];
    result.docs.forEach((doc) => {
      array.push(doc.data() as Article);
    });
    return array;
  }
}
