import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Article } from '@home/models/article.model';
import { Observable } from 'rxjs';
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

  createArticle(article: Article) {
    return this.firestore.collection('article')
      .add(article);
  }

  private convertCollectionToArrayArticles(result: QuerySnapshot<unknown>): Article[] {
    const array: Article[] = [];
    result.docs.forEach((doc) => {
      array.push(doc.data() as Article);
    });
    return array;
  }
}
