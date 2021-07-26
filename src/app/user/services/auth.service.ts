import { MenuState } from 'src/app/store/app.reducer';
import { UserModel } from './../../shared/models/user.model';
import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Store } from '@ngrx/store';
import { login, logout } from 'src/app/store/app.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    private angularFireStore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private store: Store<MenuState>
  ) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') as string);
      } else {
        localStorage.setItem('user', '');
        JSON.parse(localStorage.getItem('user') as string);
      }
    });
  }

  SignIn(email: string, password: string) {
    return from(
      this.angularFireAuth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.ngZone.run(() => {
            this.router.navigate(['']);
          });
          this.store.dispatch(login());
          this.SetUserData(result.user);
        })
    )
  }

  SignUp(email: string, password: string) {
    return from(
      this.angularFireAuth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          this.SetUserData(result.user);
        })
    )
  }

  SignOut() {
    return from(
      this.angularFireAuth.signOut()
        .then(() => {
          this.store.dispatch(logout())
          localStorage.removeItem('user');
          this.router.navigate(['']);
        })
    )
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.angularFireStore.doc(`users/${user.uid}`);
    const userData: UserModel = {
      uid: user.uid as string,
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }

    localStorage.setItem('user', JSON.stringify(userData));

    return userRef.set(userData, {
      merge: true
    })
  }

  get isLoggedIn(): boolean {
    const user = localStorage.getItem('user') as string;
    return user ? true : false;
  }
}
