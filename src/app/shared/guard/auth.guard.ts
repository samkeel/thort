import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(UserService);

  return service.isLoggedIn$.pipe(
    tap((value) => {
      return !value ? router.navigate(['/login']) : true
    })
  )

  // return true;
};
