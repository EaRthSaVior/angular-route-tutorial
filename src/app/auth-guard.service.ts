import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
//@Injectable({ providedIn: 'root' })
//old ways
// export class AuthGuardService implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     return this.authService
//       .isAuthenticated()
//       .then((isAuthenticated: boolean) => {
//         if (isAuthenticated) {
//           return true;
//         } else {
//           this.router.navigate(['/']);
//           return false;
//         }
//       });
//   }
// }

// new way

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isAuthenticated().then((isAuthenticated: boolean) => {
    if (isAuthenticated) {
      return true;
    } else {
      router.navigate(['/']);
      return false;
    }
  });
};

export const canActivateChild: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return canActivate(route, state);
};
