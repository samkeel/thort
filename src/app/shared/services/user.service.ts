import { Injectable } from '@angular/core';
import {
  User,
  Auth,
  user,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  authState,
  onAuthStateChanged,
} from '@angular/fire/auth';
import { EMPTY, Observable, map } from 'rxjs';
import { AuthData } from '../Models/auth-data.model';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$: Observable<User | null> = EMPTY;
  isLoggedIn$: Observable<boolean>;
  constructor(
    private afAuth: Auth,
    private router: Router,
    private snackbarService: SnackbarService
  ) {
    // user method 1
    this.user$ = user(afAuth);
    // user method 2
    // this.user$ = authState(afAuth);
    // user method 3
    // this.user$ = new Observable((observer: any) =>
    // user method 4
    // onAuthStateChanged(afAuth, observer));

    // user auth state
    this.isLoggedIn$ = authState(this.afAuth).pipe(map((user) => !!user));
  }

  signUpNewUserEmail(authData: AuthData) {
    try {
      createUserWithEmailAndPassword(
        this.afAuth,
        authData.email,
        authData.password
      )
        .then(() => this.router.navigate(['/']))
        .then(() =>
          this.snackbarService.openSnackBar('Welcome to the dark side', '')
        )
        .catch((error) => {
          this.snackbarService.openSnackBar(
            this.convertErrorMessage(error['code']),
            ''
          );
        });
    } catch (error) {
      this.snackbarService.openSnackBar('error', '');
    }
  }

  login(authData: AuthData) {
    try {
      signInWithEmailAndPassword(this.afAuth, authData.email, authData.password)
        .then(() => this.router.navigate(['']))
        .then(() =>
          this.snackbarService.openSnackBar('Welcome back (^-^)/', '')
        );
    } catch (error) {
      this.snackbarService.openSnackBar('error', '');
    }
  }

  logout() {
    try {
      signOut(this.afAuth)
        .then(() => this.router.navigate(['']))
        .then(() =>
          this.snackbarService.openSnackBar('Logged out ( ･_･)/', '')
        );
    } catch (error) {}
  }

  getCurrentUser() {}

  convertErrorMessage(code: string): string {
    switch (code) {
      case 'auth/user-disabled': {
        return 'Sorry your user is disabled (°o•)';
      }
      case 'auth/user-not-found': {
        return 'Email address not found ¯\\_(ツ)_/¯';
      }
      case 'auth/email-already-in-use': {
        return 'Email already exists (ಥ﹏ಥ)';
      }
      default: {
        return "Login error try again later (⊙＿⊙')";
      }
    }
  }
}
