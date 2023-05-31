import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  signUpNewUserEmail() {}

  login() {}

  logout() {}

  getCurrentUser() {}

  convertErrorMessage(code: string): string {
    switch (code) {
      case 'auth/user-disabled': {
        return 'Sorry your user is disabled (°o•)'
      }
      case 'auth/user-not-found': {
        return 'Email address not found ¯\\_(ツ)_/¯'
      }
      case 'auth/email-already-in-use': {
        return 'Email already exists (ಥ﹏ಥ)'
      }
      default: {
        return "Login error try again later (⊙＿⊙')"
      }
    }
  }

}
